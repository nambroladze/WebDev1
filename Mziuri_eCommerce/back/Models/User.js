import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: String,
  displayNaeme: String,
  role: {
    type: String,
    enum: ["admin", "edtior", "viewer"],
  },
});

export const User = mongoose.model("User", userSchema);
