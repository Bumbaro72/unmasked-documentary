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
        // Nađi sve sekcije koje imaju lijevu i desnu polovicu
        const allLeftHalves = document.querySelectorAll('.left');
        const allRightHalves = document.querySelectorAll('.right');
      
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
      
        allLeftHalves.forEach(leftHalf => {
          leftHalf.addEventListener('mouseenter', () => handleHover(leftHalf, true));
          leftHalf.addEventListener('mouseleave', () => handleHover(leftHalf, false));
        });
      
        allRightHalves.forEach(rightHalf => {
          rightHalf.addEventListener('mouseenter', () => handleHover(rightHalf, true));
          rightHalf.addEventListener('mouseleave', () => handleHover(rightHalf, false));
        });
      });
      


    

      document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section.special');  // Pronađi sve sekcije s class "special"
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('open');  // Dodajemo 'open' kad sekcija uđe u vidokrug
            } else {
              entry.target.classList.remove('open');  // Uklonimo 'open' kad sekcija izađe iz vidokruga
            }
          });
        }, { threshold: 0.5 });  // Trigger kada sekcija bude 50% u vidokrugu
      
        sections.forEach(section => observer.observe(section));  // Aktiviraj observer na svakoj sekciji
      });
      
      // Cinematic intro fade-in
document.addEventListener('DOMContentLoaded', () => {
    const fadeLayer = document.createElement('div');
    fadeLayer.id = 'intro-fade';
    document.body.appendChild(fadeLayer);

    setTimeout(() => {
        fadeLayer.classList.add('hidden');
    }, 50); // možeš prilagoditi kašnjenje ako želiš dramatičnije
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeLayer = document.createElement('div');
    fadeLayer.id = 'intro-fade';
    document.body.appendChild(fadeLayer);

    setTimeout(() => {
        fadeLayer.classList.add('hidden');
    }, 50);

    // F A D E   O U T   on navigation
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                fadeLayer.classList.remove('hidden');
                fadeLayer.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 100); // vrijeme mora odgovarati CSS transition
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const grainOverlay = document.getElementById('film-grain');
    const grainSlider = document.getElementById('grain-opacity');
  
    if (grainOverlay && grainSlider) {
      grainSlider.addEventListener('input', (e) => {
        grainOverlay.style.opacity = e.target.value;
      });
    }
  });
  