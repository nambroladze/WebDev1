import mongoose, { mongo } from "mongoose";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestfriend: { type: mongoose.SchemaTypes.ObjectId, ref: "Person" },
  hobbies: [String],
  address: addressSchema,
});

export const Person = mongoose.model("Person", personSchema);
