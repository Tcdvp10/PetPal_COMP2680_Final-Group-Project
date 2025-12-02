// shop-checkout.js

// ---------- CART DATA MANAGEMENT ----------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();
}

// Update cart icon with number of items
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
        badge.style.position = 'absolute';
        badge.style.top = '0';
        badge.style.right = '0';
        badge.style.backgroundColor = 'red';
        badge.style.color = 'white';
        badge.style.fontSize = '12px';
        badge.style.borderRadius = '50%';
        badge.style.padding = '2px 6px';
        cartIcon.style.position = 'relative';
        cartIcon.appendChild(badge);
    }
}

// ---------- ADD TO CART FUNCTION ----------
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}

// ---------- MODIFY CART ITEMS ----------
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

// ---------- DISPLAY CART ON CHECKOUT ----------
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
            <strong>${item.name}</strong> - $${item.price.toFixed(2)}
            <br>
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

    // Enable or disable "Clear Cart" button
    if (clearBtn) clearBtn.style.display = cart.length > 0 ? 'block' : 'none';

    // Attach event listeners for +, -, remove buttons
    cartList.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const action = btn.dataset.action;

            if (action === 'increase') increaseQuantity(id);
            if (action === 'decrease') decreaseQuantity(id);
        });
    });

    cartList.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeItem(btn.dataset.id));
    });
}

// ---------- SIMULATE PAYMENT ----------
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

// ---------- NAV CART ICON CLICK ----------
const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}

// ---------- CLEAR CART BUTTON ----------
const clearBtn = document.getElementById('clear-cart');
if (clearBtn) {
    clearBtn.addEventListener('click', clearCart);
}

// ---------- INITIALIZATION ----------
displayCart();
updateCartIcon();

// ---------- BUY BUTTONS ON SHOP PAGE ----------
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = {
            id: btn.dataset.id,
            name: btn.dataset.name,
            price: parseFloat(btn.dataset.price)
        };
        addToCart(product);
        alert(`${product.name} added to cart!`);
    });
});
