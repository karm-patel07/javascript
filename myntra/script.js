function addToCart(button) {
  const product = button.parentElement;
  const id = product.getAttribute("data-id");
  const name = product.getAttribute("data-name");
  const price = product.getAttribute("data-price");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart!`);
}
