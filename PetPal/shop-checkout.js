// shop-checkout.js

// ---------- CART DATA MANAGEMENT ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) return;

    let count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const oldBadge = cartIcon.querySelector('.cart-count');
    if (oldBadge) oldBadge.remove();

    if (count > 0) {
        const badge = document.createElement('span');
        badge.classList.add('cart-count');
        badge.textContent = count;

        cartIcon.style.position = 'relative';
        badge.style.position = 'absolute';
        badge.style.top = '0';
        badge.style.right = '-5px';
        badge.style.backgroundColor = 'red';
        badge.style.color = 'white';
        badge.style.fontSize = '12px';
        badge.style.borderRadius = '50%';
        badge.style.padding = '2px 6px';
        badge.style.fontWeight = 'bold';
        cartIcon.appendChild(badge);
    }
}

function addToCart(product, quantity = 1) {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart();
}

// ---------- MODIFY CART ----------
function increaseQuantity(id) {
    const item = cart.find(i => i.id === id);
    if (item) item.quantity++;
    saveCart();
    displayCart();
}

function decreaseQuantity(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity--;
        if (item.quantity <= 0) removeItem(id);
    }
    saveCart();
    displayCart();
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    displayCart();
}

function clearCart() {
    cart = [];
    saveCart();
    displayCart();
}

// ---------- DISPLAY CART ----------
function displayCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const clearBtn = document.getElementById('clear-cart');

    if (!cartList) return;

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');

        li.innerHTML = `
            <strong>${item.name}</strong> - $${item.price.toFixed(2)} <br>

            <button class="qty-btn" data-id="${item.id}" data-action="decrease">−</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>

            <button class="remove-btn" data-id="${item.id}">Remove</button>

            <span class="item-total"> = $${(item.price * item.quantity).toFixed(2)}</span>
        `;

        cartList.appendChild(li);
        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = total.toFixed(2);

    if (clearBtn) clearBtn.style.display = cart.length > 0 ? 'block' : 'none';

    cartList.querySelectorAll('.qty-btn').forEach(btn => {
        const id = btn.dataset.id;
        const action = btn.dataset.action;

        btn.addEventListener('click', () => {
            if (action === 'increase') increaseQuantity(id);
            if (action === 'decrease') decreaseQuantity(id);
        });
    });

    cartList.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeItem(btn.dataset.id));
    });
}

// ---------- PAYMENT ----------
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        cart = [];
        saveCart();
        displayCart();
        checkoutForm.reset();
        window.location.href = 'success.html';
    });
}

// ---------- NAV CART CLICK ----------
const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}

// ---------- CLEAR CART ----------
const clearBtn = document.getElementById('clear-cart');
if (clearBtn) {
    clearBtn.addEventListener('click', clearCart);
}

// ---------- PRODUCT CARD BUY BUTTON WITH QUANTITY ----------
document.querySelectorAll(".product-box").forEach(box => {
    let qtyDisplay = box.querySelector(".qty-display");
    let minus = box.querySelector(".minus");
    let plus = box.querySelector(".plus");
    let buyButton = box.querySelector(".buy-button");

    let quantity = 1;

    minus.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            qtyDisplay.textContent = quantity;
        }
    });

    plus.addEventListener("click", () => {
        quantity++;
        qtyDisplay.textContent = quantity;
    });

    buyButton.addEventListener("click", () => {
        const product = {
            id: buyButton.dataset.id,
            name: buyButton.dataset.name,
            price: parseFloat(buyButton.dataset.price)
        };

        addToCart(product, quantity);

        alert(`${quantity} × ${product.name} added to cart!`);

        quantity = 1;
        qtyDisplay.textContent = 1;
    });
});

// ---------- FADE IN ----------
const productBoxes = document.querySelectorAll(".product-box");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

productBoxes.forEach(box => revealObserver.observe(box));

// ---------- INIT ----------
displayCart();
updateCartIcon();
