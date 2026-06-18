import express from "express";
import { Product } from "../Models/Product.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const product = new Product({
      name: "football",
      category: "sports",
      price: 250,
    });

    await product.save();
    res.send("product added sucesfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
