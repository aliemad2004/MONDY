// Toggle Mobile Menu (for smaller screens)
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Handle scroll to change Navbar styles (background color change on scroll)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-black/80');
    } else {
        navbar.classList.remove('bg-black/80');
    }
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000, // animation duration
    easing: 'ease-in-out', // easing function
    once: true, // animation happens only once
    offset: 120 // distance from top before animation starts
});

// Back to top button functionality
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.classList.add('fixed', 'bottom-8', 'right-8', 'bg-red-500', 'text-white', 'p-3', 'rounded-full', 'shadow-lg', 'hover:bg-red-600', 'transition-all', 'transform', 'hover:scale-110', 'opacity-0');
document.body.appendChild(backToTopBtn);

// Show/hide back-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('opacity-0');
    } else {
        backToTopBtn.classList.add('opacity-0');
    }
});

// Scroll to top when the button is clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Product hover effect
const productCards = document.querySelectorAll('.group');

productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('img').classList.add('scale-110');
    });
    card.addEventListener('mouseout', () => {
        card.querySelector('img').classList.remove('scale-110');
    });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
});
