// Home page scripts 1
console.log('Home page JS loaded');


// Update your observer to handle both types
const observers = [];

// Hero section observer
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('unmasked');
    }
  });
}, {threshold: 0.1});
heroObserver.observe(document.getElementById('hero'));

// Horizontal sections observer (existing)
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {threshold: 0.1});
document.querySelectorAll('.split-section').forEach(section => {
  sectionObserver.observe(section);
});