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
// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header background change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'linear-gradient(90deg, #059669, #2563eb)';
    header.style.transition = '0.4s ease';
  } else {
    header.style.background = 'linear-gradient(90deg, #2563eb, #059669)';
  }
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.background = "#f97316";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.padding = "12px";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header background change on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'linear-gradient(90deg, #059669, #2563eb)';
    header.style.transition = '0.4s ease';
  } else {
    header.style.background = 'linear-gradient(90deg, #2563eb, #059669)';
  }
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.innerText = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.background = "#f97316";
backToTop.style.color = "white";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.padding = "12px";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
