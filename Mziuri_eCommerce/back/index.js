import express from "express";
import cors from "cors";
import "./db.js";

import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

import authMiddleware from "./middlewares/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", authMiddleware, userRoute);
app.use("/products", authMiddleware, productRoute);

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
