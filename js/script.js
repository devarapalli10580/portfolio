// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Smooth Scroll & Animation
document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-element');
    function fadeInOnScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.classList.add('fade-in');
            }
        });
    }
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
});
