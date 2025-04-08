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


    document.addEventListener('DOMContentLoaded', () => {
        const leftHalf = document.querySelector('.left');
        const rightHalf = document.querySelector('.right');
      
        const handleHover = (half, enter) => {
          const texts = half.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
          texts.forEach(el => {
            if (enter) {
              el.style.opacity = '1';
              el.classList.add('underline-active');
            } else {
              el.style.opacity = '0.15';
              el.classList.remove('underline-active');
            }
          });
        };
      
        leftHalf.addEventListener('mouseenter', () => handleHover(leftHalf, true));
        leftHalf.addEventListener('mouseleave', () => handleHover(leftHalf, false));
      
        rightHalf.addEventListener('mouseenter', () => handleHover(rightHalf, true));
        rightHalf.addEventListener('mouseleave', () => handleHover(rightHalf, false));
      });

      document.addEventListener('DOMContentLoaded', () => {
        const specials = document.querySelectorAll('section.special');
      
        specials.forEach(section => {
          const left = section.querySelector('.curtain[data-side="left"]');
          const right = section.querySelector('.curtain[data-side="right"]');
      
          // Pokrećemo animaciju samo kad su curtaini u poziciji za animaciju
          setTimeout(() => {
            left.style.transform = 'translateY(-100%)';  // Spuštamo lijevi curtain prema gore
            right.style.transform = 'translateY(100%)'; // Spuštamo desni curtain prema dolje
          }, 100); // Lagano kašnjenje za efekte
        });
      });
      