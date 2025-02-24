// Initialize EmailJS (replace with your actual public key)
emailjs.init("dsH-UJiRkwRXWWpz8");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form submission handler using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_k9f2x6b', 'template_b0x54ur', this)
    .then(function(response) {
      alert('Thank you for your message! I will respond shortly.');
      document.getElementById('contact-form').reset();
    }, function(error) {
      alert('Failed to send message. Please try again later.');
      console.error('EmailJS error:', error);
    });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate__animated').forEach(element => {
  observer.observe(element);
});
