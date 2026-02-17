@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Rajdhani:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #0a0a0a;
    color: white;
    font-family: 'Rajdhani', sans-serif;
}

/* NAVBAR */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    background: #000;
    border-bottom: 2px solid #1c69d4;
}

.logo {
    font-family: 'Orbitron', sans-serif;
    font-size: 22px;
    color: #1c69d4;
    letter-spacing: 2px;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    transition: 0.3s;
}

nav a:hover {
    color: #1c69d4;
}

/* HERO */
.hero {
    height: 85vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.95)),
    url("https://images.unsplash.com/photo-1503376780353-7e6692767b70") center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.hero h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 55px;
}

.hero span {
    color: #1c69d4;
}

.btn {
    margin-top: 20px;
    padding: 12px 28px;
    background: #1c69d4;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;
}

.btn:hover {
    background: #0f3c88;
}

section {
    padding: 80px 60px;
}

.section-title {
    font-family: 'Orbitron', sans-serif;
    font-size: 32px;
    margin-bottom: 40px;
    border-left: 5px solid #1c69d4;
    padding-left: 15px;
}

/* PRODUCT GRID */
.products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    background: #111;
    padding: 20px;
    border: 1px solid #222;
    transition: 0.3s;
}

.product-card:hover {
    border-color: #1c69d4;
    transform: translateY(-5px);
}

.price {
    color: #1c69d4;
    font-weight: bold;
    margin: 10px 0;
}

/* BUILD SHOWCASE */
.build-showcase {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.build-showcase img {
    width: 500px;
    max-width: 100%;
}

.build-details {
    max-width: 500px;
}

/* FILTER BUTTONS */
.filters button {
    margin-right: 15px;
    margin-bottom: 20px;
    padding: 8px 16px;
    background: #111;
    border: 1px solid #1c69d4;
    color: white;
    cursor: pointer;
}

.filters button:hover {
    background: #1c69d4;
}

/* CART */
.cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
}

footer {
    text-align: center;
    padding: 40px;
    background: #000;
    border-top: 2px solid #1c69d4;
}
