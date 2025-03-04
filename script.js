let cart = [];
let total = 0;

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        updateCart();
    }
}