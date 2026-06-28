// ===============================
// Shopping Cart
// ===============================

let cart = getCart();

function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart(cart);

    renderCart();

    updateCartBadge();

}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);

    renderCart();

    updateCartBadge();

}

function increaseQty(id) {

    const item = cart.find(item => item.id === id);

    if (item) {

        item.quantity++;

    }

    saveCart(cart);

    renderCart();

    updateCartBadge();

}

function decreaseQty(id) {

    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }

    saveCart(cart);

    renderCart();

    updateCartBadge();

}

function renderCart() {

    const cartItems = document.getElementById("cart-items");

    const total = document.getElementById("total");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        total.textContent = "0";

        return;

    }

    let grandTotal = 0;

    cart.forEach(item => {

        grandTotal += item.price * item.quantity;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
            </div>

            <div>

                <button onclick="decreaseQty(${item.id})">-</button>

                <strong>${item.quantity}</strong>

                <button onclick="increaseQty(${item.id})">+</button>

            </div>

            <div>

                ₹${item.price * item.quantity}

            </div>

            <button onclick="removeFromCart(${item.id})">

                Remove

            </button>

        `;

        cartItems.appendChild(div);

    });

    total.textContent = grandTotal;

}

document.getElementById("checkout").addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }

    alert("Order Placed Successfully!");

    cart = [];

    clearCart();

    renderCart();

    updateCartBadge();

});

renderCart();

updateCartBadge();