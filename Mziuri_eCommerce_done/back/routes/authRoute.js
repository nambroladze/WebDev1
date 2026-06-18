import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const user = { id: 1, username: "niko", password: "niko123" };
const SECRET = process.env.JWT_SECRET;

router.post("/login", (req, res) => {
  console.log(SECRET);

  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

router.post("");

export default router;
