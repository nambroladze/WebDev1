import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const user = {
  id: 1,
  username: "niko",
  password: "niko123",
  refreshToken: null,
};
const SECRET = process.env.JWT_SECRET;

router.post("/login", (req, res) => {
  console.log(SECRET);

  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
    expiresIn: "2s",
  });

  const refreshToken = jwt.sign(
    { id: user.id, username: user.username },
    SECRET,
    {
      expiresIn: "1h",
    }
  );

  user.refreshToken = refreshToken;

  res.json({ token, refreshToken });
});

router.post("/refresh-token", (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }

  if (refreshToken !== user.refreshToken) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }

  try {
    const decoded = jwt.verify(refreshToken, SECRET);

    const token = jwt.sign(
      { id: decoded.id, username: decoded.username },
      SECRET,
      { expiresIn: "2s" }
    );

    const newRefreshToken = jwt.sign(
      { id: decoded.id, username: decoded.username },
      SECRET,
      { expiresIn: "1h" }
    );

    user.refreshToken = newRefreshToken;

    res.json({ token, refreshToken: newRefreshToken });
  } catch {
    res.status(403).json({ message: "Invalid or expired refresh token" });
  }
});

export default router;
