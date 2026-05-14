import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/login", (req, res) => {
  res.send({ token: "1k312304j50f0" });
});

app.post("/profile/:10", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).send("you are not authorized");
  }

  return res
    .status(200)
    .send({ id: 1, username: "niko", age: 19, job: "teacher" });
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
