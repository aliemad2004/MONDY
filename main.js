document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active'); // Used for max-height transition
        });
    }

    // Hero Section Content Animation
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
        // Start off-screen and invisible for animation
        heroContent.classList.add('opacity-0', 'transform', 'translate-y-10'); 

        // Animate in after a small delay
        setTimeout(() => {
            heroContent.classList.remove('opacity-0', 'transform', 'translate-y-10');
            heroContent.classList.add('opacity-100', 'transition-all', 'duration-1000', 'ease-out');
        }, 100); 
    }

    // Sticky Navbar with background change
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // عندما يتجاوز التمرير 50 بكسل
                navbar.classList.add('bg-black', 'shadow-lg', 'bg-opacity-100');
                navbar.classList.remove('bg-black/90', 'backdrop-blur-sm');
            } else { // عندما يكون التمرير أقل من 50 بكسل
                navbar.classList.remove('bg-black', 'shadow-lg', 'bg-opacity-100');
                navbar.classList.add('bg-black/90', 'backdrop-blur-sm');
            }
        });
    }

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000, // مدة الرسوم المتحركة الافتراضية بالمللي ثانية
        once: true,     // هل يجب أن تحدث الرسوم المتحركة مرة واحدة فقط عند التمرير إلى العنصر
        mirror: false,  // هل يجب أن تختفي العناصر عند التمرير بعيدًا عنها
    });
});