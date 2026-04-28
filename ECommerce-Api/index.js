import express, { request, response } from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, username: "ilo", password: "ilo123" },
  { id: 2, username: "amiko", password: "amiko123" },
  { id: 3, username: "saba", password: "saba123" },
  { id: 6, username: "leto", password: "saba123" },
];

const products = [
  { id: 1, name: "mouse", price: "10$" },
  { id: 2, name: "keyboard", price: "20$" },
  { id: 3, name: "screen", price: "150$" },
];

// app.get("/users", (request, response) => {
//   response.send(users);
// });

// app.get("/users/:id", (request, response) => {
//   const parsedId = parseInt(request.params.id);

//   if (isNaN(parsedId)) {
//     return response.send("index should be number only");
//   }

//   if (parsedId < 0 || parsedId >= users.length) {
//     return response.send("invalid index");
//   }
//   response.send(users[request.params.id]);
// });

// app.get("/users", (request, response) => {
//   response.send(users);
// });

// app.get("/nebismieri", (request, response) => {
//   response.send(products);
// });

app.get("/users", (request, response) => {
  response.send("users");
});

app.post("/users", (request, response) => {
  const body = request.body;

  const newId = users[users.length - 1].id + 1;
  const newUser = {
    id: newId,
    username: body.username,
    password: body.password,
  };

  users.push(newUser);
  response.send(users);
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
