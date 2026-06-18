import express from "express";
import cors from "cors";
import "./db.js";
import "dotenv/config";

import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";

import authMiddleware from "./middlewares/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);

app.get("/protectedRoute", authMiddleware, (req, res) => {
  res.send({ message: "Message recieved from protected route" });
});

app.get("/unprotectedRoute", (req, res) => {
  res.send({ message: "everyone can call this message" });
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
