let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  total += productPrice;

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = ""; // Clear existing items

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("totalPrice").textContent = `Total: $${total}`;
}
