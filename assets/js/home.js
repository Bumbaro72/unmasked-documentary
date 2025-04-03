// Home page scripts 1
console.log('Home page JS loaded');

// Update your observer config to:
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('unmasked');
        // Special delay for hero text
        if(entry.target.id === 'hero-section') {
          setTimeout(() => {
            entry.target.querySelectorAll('.hero-text').forEach(text => {
              text.style.opacity = 1;
            });
          }, 800); // Matches CSS transition
        }
      }
    });
  }, {threshold: 0.2});