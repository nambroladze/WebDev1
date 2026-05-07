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

app.put("/products", (request, response) => {
  const body = request.body;

  const parsedId = parseInt(body.id);
  if (isNaN(parsedId)) return response.status(400).send("id is not valid");

  const productId = products.find((p) => p.id === parsedId);
  if (!productId) return response.send("product with this id was not found");

  products[parsedId] = { ...body };

  return response.send(
    `product updated succesfully ${JSON.stringify(products[parsedId])}`,
  );
});

app.patch("/products/:id", (request, response) => {
  const { body, params } = request;

  const parsedId = parseInt(params.id);
  if (isNaN(parsedId)) return response.status(400).send("id is not valid");

  const productId = products.find((p) => p.id === parsedId);
  if (!productId) return response.send("product with this id was not found");

  products[parsedId] = { ...products[parsedId], ...body };

  return response.send(
    `product updated succesfully ${JSON.stringify(products[parsedId])}`,
  );
});

app.delete("/products/:id", (request, response) => {});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
