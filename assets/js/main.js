// Global functionality 1
console.log('Global JS loaded');

// Mobile menu toggle if needed
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
});

// AŽURIRANI JAVASCRIPT
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-with-effect');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-unmasked');
        // Optional: Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
});
