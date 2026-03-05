const database = [
  { username: "alice", password: "alice123" },
  { username: "bob", password: "bob123" },
  { username: "charlie", password: "charlie123" },
];

function LogIn(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const errorMessage = document.getElementById("error-message");

  if (username === "") {
    errorMessage.textContent = "Username cannot be empty.";
    return;
  }

  if (password === "") {
    errorMessage.textContent = "Password cannot be empty.";
    return;
  }

  let foundUser = false;

  for (let i = 0; i < database.length; i++) {
    const user = database[i];
    if (user.username === username && user.password === password) {
      foundUser = true;
      break;
    }
  }

  if (foundUser) {
    errorMessage.textContent = "Login successful.";
  } else {
    errorMessage.textContent = "Incorrect username or password.";
  }
}
