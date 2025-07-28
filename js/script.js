// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Navigation menu toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      navToggle.setAttribute(
        'aria-expanded',
        navList.classList.contains('open') ? 'true' : 'false'
      );
    });
  }

  // Scroll to Top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    // Show or hide button on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    // Smooth scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Optional: Dark mode toggle (requires a button with class .dark-mode-toggle)
  const darkModeToggle = document.querySelector('.dark-mode-toggle');

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Optionally save preference to localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.removeItem('darkMode');
      }
    });

    // Load saved mode
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
    }
  }
});
