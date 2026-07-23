// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Simple Cart Functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');

function addToCart() {
    cartCount++;
    cartCountElement.innerText = cartCount;
    
    // Animation effect for cart
    cartCountElement.style.transform = "scale(1.5)";
    setTimeout(() => {
        cartCountElement.style.transform = "scale(1)";
    }, 200);

    alert("Item added to cart successfully! 🍕");
}

// Delivery/Pickup Toggle Switch
const toggleSpans = document.querySelectorAll('.toggle-switch span');
toggleSpans.forEach(span => {
    span.addEventListener('click', () => {
        toggleSpans.forEach(s => s.classList.remove('active'));
        span.classList.add('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
