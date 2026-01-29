// Accordion
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") { panel.style.display = "none"; } 
    else { panel.style.display = "block"; }
  });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});

// Mobile Menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });
