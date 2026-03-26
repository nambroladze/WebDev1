const products = [
  {
    title: "Linen Overshirt",
    category: "Clothing",
    price: 79,
    image: "product-image-1",
    badge: "New",
  },
  {
    title: "Everyday Tote Bag",
    category: "Accessories",
    price: 39,
    image: "product-image-2",
    badge: "Bestseller",
  },
  {
    title: "Ceramic Mug Set",
    category: "Home",
    price: 29,
    image: "product-image-3",
    badge: null,
  },
  {
    title: "Soft Cotton Hoodie",
    category: "Clothing",
    price: 69,
    image: "product-image-4",
    badge: null,
  },
  {
    title: "Soft Cotton Hoodie",
    category: "Clothing",
    price: 69,
    image: "product-image-4",
    badge: null,
  },
];

const productGrid = document.querySelector(".product-grid");

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  productGrid.innerHTML += `
    <article class="product-card">
    <div class="product-image ${product.image}">
            ${
              product.badge &&
              `<span class="product-badge ${product.badgeClass}">
                ${product.badge}
              </span>`
            }
             </div>
       
        <div class="product-body">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">${product.price}</p>
            <button class="btn btn-full" type="button">Add to cart</button>
        </div>
    </article>
    `;
}
