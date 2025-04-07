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


    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        });
    }

    const fadeContainers = document.querySelectorAll('.whole');

    function handleFadeIn() {
        fadeContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                container.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', handleFadeIn);
    window.addEventListener('load', handleFadeIn);
    