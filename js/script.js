// Smooth scroll to section and set focus for accessibility
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.focus({preventScroll:false});
    window.scrollTo({top: section.offsetTop - 80, behavior: 'smooth'});
  }
}

// Nav logo keyboard accessible click
document.querySelector('.logo').addEventListener('click', () => {
  scrollToSection('home');
});
document.querySelector('.logo').addEventListener('keypress', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    scrollToSection('home');
    e.preventDefault();
  }
});
