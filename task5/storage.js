// ===============================
// Local Storage Functions
// ===============================

function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function clearCart() {
    localStorage.removeItem("cart");
}

function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

function updateCartBadge() {
    const badge = document.getElementById("cart-count");

    if (badge) {
        badge.textContent = getCartCount();
    }
}