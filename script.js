// Accordion
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(acc => {
  acc.addEventListener('click', () => {
    acc.classList.toggle('active');
    const panel = acc.nextElementSibling;
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  });
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been received.');
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});