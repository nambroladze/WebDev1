getProducts();
async function getProducts() {
  const result = await fetch("http://localhost:3000/products");
  const data = await result.json();

  renderProducts(data);
}

function renderProducts(products) {
  const grid = document.getElementById("shop");
  products.forEach((p) => grid.appendChild(buildCard(p))); // appendChild
}

function buildCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  const category = document.createElement("div");
  category.className = "category";
  category.textContent = product.category;

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = product.productName;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = "$" + product.price;

  card.appendChild(category);
  card.appendChild(name);
  card.appendChild(price);

  return card;
}
