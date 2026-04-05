export function getCart() {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem("cart");
  return raw ? JSON.parse(raw) : [];
}

function notifyCartUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cartUpdated"));
  }
}

export function addToCart(product: {
  id: string;
  name: string;
  price: number;
}) {
  const cart = getCart();

  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  notifyCartUpdated();
}

export function removeFromCart(id: string) {
  const cart = getCart().filter((item: any) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  notifyCartUpdated();
}

export function clearCart() {
  localStorage.removeItem("cart");
  notifyCartUpdated();
}

export function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum: number, item: any) => sum + item.quantity, 0);
}