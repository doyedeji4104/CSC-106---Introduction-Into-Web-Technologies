// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Add to cart functionality (simulated)
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCount = document.getElementById('cart-count');
    
    let currentCart = parseInt(localStorage.getItem('cartCount')) || 0;
    if(cartCount) cartCount.innerText = currentCart;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            currentCart++;
            localStorage.setItem('cartCount', currentCart);
            if(cartCount) cartCount.innerText = currentCart;
            alert("Item added to your cart!");
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thank you for your message. We will get back to you shortly.");
            contactForm.reset();
        });
    }

    // Checkout Form Submission
    const checkoutForm = document.getElementById('checkout-form');
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Order placed successfully! Thank you for shopping with us.");
            localStorage.setItem('cartCount', 0);
            window.location.href = "index.html";
        });
    }
});