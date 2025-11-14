//This strictly Java script coding for the payment gateway simulation

const form = document.getElementById('checkoutForm');
const successMessage = document.getElementById('successMessage');
const extraContent = document.getElementById('extraContent');

const cart = [
    { name: "Product 1", quantity: 2, price: 25.00 },
    { name: "Product 2", quantity: 1, price: 40.00 },
    { name: "Product 3", quantity: 3, price: 15.00 }
];

// Function to render cart items dynamically
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");
    cartItemsContainer.innerHTML = ""; // clear existing items

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsContainer.appendChild(li);

        total += item.price * item.quantity;
    });

    totalPriceEl.textContent = total.toFixed(2);
}

// Call the function to display cart on page load
renderCart();

form.addEventListener('submit', function (event) {
    event.preventDefault(); // stop form from reloading page

    successMessage.textContent = "Processing payment...";
    successMessage.style.display = 'block';
    successMessage.style.background = '#fff3cd';
    successMessage.style.color = '#856404';

    setTimeout(() => {
        successMessage.textContent = "✅ Payment Done! Thank you for your purchase.";
        successMessage.style.background = '#d4edda';
        successMessage.style.color = '#155724';
        extraContent.style.display = 'block';
        form.style.display = 'none';
    }, 2000);
});