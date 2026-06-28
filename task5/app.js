// ==========================
// Product Rendering
// ==========================

const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

// Display Products
function displayProducts(productList = products) {

    productGrid.innerHTML = "";

    if (productList.length === 0) {
        productGrid.innerHTML = "<h2>No Products Found</h2>";
        return;
    }

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">
                    ₹${product.price}
                </div>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

        productGrid.appendChild(card);

    });

}

// Search Function
searchInput.addEventListener("input", filterProducts);

// Category Filter
categorySelect.addEventListener("change", filterProducts);

function filterProducts() {

    const searchText =
    searchInput.value.toLowerCase();

    const category =
    categorySelect.value;

    const filtered = products.filter(product => {

        const matchesSearch =
        product.name.toLowerCase().includes(searchText);

        const matchesCategory =
        category === "all" ||
        product.category === category;

        return matchesSearch && matchesCategory;

    });

    displayProducts(filtered);

}

// Initial Load
displayProducts();
renderCart();
updateCartBadge();