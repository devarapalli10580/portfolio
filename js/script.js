// Smooth scrolling already handled by CSS scroll-behavior

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.textContent = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.id = 'darkModeToggle';
darkModeBtn.textContent = '🌙';
document.querySelector('header').appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkModeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Highlight active nav link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Animate sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Dynamic year in footer
document.querySelector('footer p').innerHTML =
    `© ${new Date().getFullYear()} Naga Venkata Satyanarayana Devarapalli | All Rights Reserved`;
