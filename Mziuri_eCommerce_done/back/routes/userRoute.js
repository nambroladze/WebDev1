import express from "express";
import { User } from "../Models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({ username: "deme" });
    res.send(users);
  } catch (error) {}
});

router.get("/get-by-id", async (req, res) => {
  try {
    const user = await User.findById("6a282aa80e68c5f89f2afb55");
    res.send(user);
  } catch (error) {}
});

router.post("/", async (req, res) => {
  const user = new User({
    username: 123,
    password: "",
  });

  await user.save();
  res.send("success");
});

router.put("/", async (req, res) => {
  const updatedData = { password: "deme213213" };

  try {
    const user = await User.findById("6a282ef7934a44d3952722ce");

    user.username = updatedData.username ?? user.username;
    user.password = updatedData.password ?? user.password;

    await user.save();
    res.send("updated user");
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const user = await User.findById("6a282f1fae70fb3f6356bcfd");
    await user.deleteOne();

    res.send("deleted sucessfully");
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
