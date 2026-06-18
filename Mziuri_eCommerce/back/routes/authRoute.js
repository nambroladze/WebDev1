import { Router } from "express";
import jwt from "jsonwebtoken";

import { User } from "../Models/User.js";

const router = Router();

const user = { id: 1, username: "niko", password: "niko123" };

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == null || password == null) {
    return res.status(400).send("credentials are not provided!!");
  }

  if (username !== user.username || password !== user.password) {
    return res.status(400).send("wrong credentials!!");
  }

  const token = jwt.sign({ id: user.id, username: user.username }, "mysecret", {
    expiresIn: "1h",
  });

  res.json({ token });
});

router.post("/register", async (req, res) => {
  const { username, password, displayName, role } = req.body;
  try {
    const user = new User({ username, password, displayName, role });
    await user.save();

    res.status(201).send("user has been added to the database");
  } catch (error) {
    res.status(400).send("database error" + error.message);
  }
});

export default router;
