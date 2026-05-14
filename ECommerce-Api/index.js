import express, { request, response } from "express";

const app = express();

app.use(express.json());

const products = [
  { id: 1, category: "Electronics", name: "Smart Watch", price: 200 },
  { id: 2, category: "Electronics", name: "Camera", price: 300 },
  { id: 3, category: "Home", name: "White Pillow", price: 20 },
  { id: 4, category: "Clothing", name: "Black Hoodie", price: 40 },
  { id: 7, category: "Clothing", name: "red Hoodie", price: 45 },
];

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
app.get("/products/:id", (req, res) => {
  console.log(req.params.id);
  const parsedid = parseInt(req.params.id);

  if (isNaN(parsedid)) {
    return res.status(400).send("value should be number");
  }

  const product = products.find((product) => product.id === parsedId);
  if (!product) {
    return res.status(404).send("this product does not exist ");
  }

  res.status(200).send(product);
=======
>>>>>>> Stashed changes
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
>>>>>>> d117e123f623127414413595208cc118d9ed6887
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
