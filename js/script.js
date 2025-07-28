// Dark Mode Toggle and Simple Smooth Scrolling

// Dark Mode
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
};

// Initialize dark mode based on localStorage
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
  }
});

// Smooth scroll for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
