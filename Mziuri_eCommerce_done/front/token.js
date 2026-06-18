const API_BASE = "http://localhost:3000";

document.getElementById("login").addEventListener("click", (e) => {
  e.preventDefault();
  login();
});

document.getElementById("protected").addEventListener("click", (e) => {
  e.preventDefault();
  sendAuthenticatedRequest("protectedRoute", { method: "GET" });
});

document.getElementById("unprotected").addEventListener("click", (e) => {
  e.preventDefault();
  sendRequest("unprotectedRoute", { method: "GET" });
});

async function login() {
  try {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "niko", password: "niko123" }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Login failed:", data.message || data);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function refreshTokens() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.error("No refresh token — please log in again");
    return null;
  }

  try {
    const response = await fetch(`${API_BASE}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Refresh failed:", data.message || data);
      return null;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    return data.token;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

async function sendAuthenticatedRequest(route, options = {}) {
  try {
    let response = await fetchWithToken(route, options, localStorage.getItem("token"));

    if (response.status === 401) {
      const newToken = await refreshTokens();
      if (!newToken) return;

      response = await fetchWithToken(route, options, newToken);
    }

    const data = await response.json();

    if (!response.ok) {
      console.error("Request failed:", data.message || data);
      return;
    }

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

function fetchWithToken(route, options, token) {
  return fetch(`${API_BASE}/${route}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token,
    },
  });
}

async function sendRequest(route, options = {}) {
  try {
    const response = await fetch(`${API_BASE}/${route}`, options);
    const data = await response.json();

    if (!response.ok) {
      console.error("Request failed:", data.message || data);
      return;
    }

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}
