let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function displayCart() {
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("cart-total");
    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </div>
        `;
    });

    totalContainer.innerText = "$" + total;
}

function filterProducts(category) {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else {
            card.style.display =
                card.dataset.category === category ? "block" : "none";
        }
    });
}

window.onload = displayCart;
