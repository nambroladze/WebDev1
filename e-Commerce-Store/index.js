import { products } from "./data.js";

const productGrid = document.querySelector(".product-grid");

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  createProductCard(product);
}

const cartItems = [];

function createProductCard(product) {
  const article = document.createElement("article");
  productGrid.appendChild(article);

  const div = document.createElement("div");
  div.classList.add("product-body");
  article.appendChild(div);

  const h3 = document.createElement("h3");
  h3.classList.add("product-title");
  h3.textContent = product.title;

  const category = document.createElement("p");
  category.classList.add("product-category");
  category.textContent = product.category;

  const price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = product.price;

  const addButton = document.createElement("button");
  addButton.classList.add("btn", "btn-full");
  addButton.textContent = "add to cart";

  div.append(h3, category, price, addButton);

  addButton.addEventListener("click", () => {
    addProductToCart(product);
  });
}

function addProductToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));

  if (!cartItems) {
    cartItems = [{ id: product.id, quantity: 1 }];
  } else {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cartItems.push({ id: product.id, quantity: 1 });
    }
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
