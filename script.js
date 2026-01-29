// Accordion Function
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you! Your message has been received.");
});
