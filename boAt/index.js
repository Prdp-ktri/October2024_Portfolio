// Initial empty cart
let cart = [];

// Function to add items to cart
function addToCart(productName, price) {
  // Check if the product is already in the cart
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    // Increase quantity if product already in cart
    existingProduct.quantity += 1;
  } else {
    // Add new product to cart
    cart.push({ name: productName, price: price, quantity: 1 });
  }
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  if (cart.length === 0) {
    cartElement.innerHTML = "<p>Cart is empty</p>";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;

    const productElement = document.createElement("div");
    productElement.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
    cartElement.appendChild(productElement);
  });

  const totalElement = document.createElement("p");
  totalElement.innerHTML = `Total: $${total}`;
  cartElement.appendChild(totalElement);

  const checkoutButton = document.createElement("button");
  checkoutButton.innerHTML = "Checkout";
  checkoutButton.onclick = checkout;
  cartElement.appendChild(checkoutButton);
}

// Function to remove items from cart
function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  updateCart();
}

// Function to handle checkout (you can integrate a payment system here)
function checkout() {
  alert(
    "Proceeding to checkout. Total: $" +
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );
  // Clear cart after checkout
  cart = [];
  updateCart();
}
