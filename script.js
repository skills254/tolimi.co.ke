// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been received.');
});