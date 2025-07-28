// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  
  // Navigation menu toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Dark mode toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Change icon (moon/sun)
      if(body.classList.contains('dark-mode')){
        darkModeToggle.textContent = '☀️';  // sun icon
      } else {
        darkModeToggle.textContent = '🌙';  // moon icon
      }

      // Optional: Save preference in localStorage
      if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

    // Load saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
      body.classList.add('dark-mode');
      darkModeToggle.textContent = '☀️';
    }
  }

  // Smooth scroll for anchor links
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close nav menu on mobile after click
        if(navMenu.classList.contains('show')){
          navMenu.classList.remove('show');
        }
      }
    });
  });

});
