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

    // Fade-in na scroll za <p> (samo)
document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '0.15'; // Vrati na inicijalnu vrijednost
        }
      });
    }, { threshold: 0.1 });
  
    paragraphs.forEach(p => observer.observe(p));
  });

