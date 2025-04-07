document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      // Add loaded class to all sections
      document.querySelectorAll('.whole').forEach(section => {
          section.classList.add('loaded');
      });
  }, 100);
});


// Global animation trigger
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelectorAll('.whole').forEach(section => {
            section.classList.add('loaded');
        });
    }, 100);
});

// Production-specific JS can be added here
console.log('Production page loaded');
