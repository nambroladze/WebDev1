import express from "express";
import cors from "cors";
import "./db.js";
import "dotenv/config";

import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import authRoute from "./routes/authRoute.js";

import logger from "./middlewares/logger.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger);

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
