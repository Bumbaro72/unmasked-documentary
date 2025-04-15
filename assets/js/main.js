// Global animation trigger
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target); // Samo jednom
        }
      });
    },
    {
      threshold: 0.3, // 30% mora biti vidljivo da se aktivira
    }
  );

  document.querySelectorAll(".whole").forEach((section) => {
    observer.observe(section);
    document.querySelectorAll(".whole.special").forEach((section) => {
      // Posebna logika samo za tu sekciju
    });
    
  });
});

document.querySelectorAll(".whole").forEach((section) => {
  console.log("Observing section:", section.id);
  observer.observe(section);
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

// Sekcije koje imaju lijevu i desnu polovicu
 document.addEventListener('DOMContentLoaded', () => {
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

// Pronađi sve sekcije s class "special"
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section.special');

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
  
// Tocke
document.querySelectorAll('.phase').forEach(phase => {
    phase.addEventListener('mouseenter', function() {
      const phaseId = this.getAttribute('data-phase');
      // Highlight odabranu fazu
      this.querySelector('circle').setAttribute('fill', '#dddddd');
      
      // Prikaži odgovarajući opis
      document.querySelector(`.phase-desc[data-phase="${phaseId}"] p`)
        .style.opacity = '1';
    });
    
phase.addEventListener('mouseleave', function() {
      const phaseId = this.getAttribute('data-phase');
      // Vrati na default stanje
      this.querySelector('circle').setAttribute('fill', 'transparent');
      
      // Sakrij opis ako nije hover na cijelom modulu
      if(!event.relatedTarget.closest('.hover-reveal')) {
        document.querySelector(`.phase-desc[data-phase="${phaseId}"] p`)
          .style.opacity = '0';
      }
    });
  });
  
document.querySelectorAll('.phase-point').forEach(point => {
    point.addEventListener('mouseenter', function() {
      const phaseNum = this.getAttribute('data-phase');
      
// Reset all
document.querySelectorAll('.phase').forEach(p => {
        p.classList.remove('active');
      });
      
// Activate corresponding phase
document.querySelector(`.phase[data-phase="${phaseNum}"]`).classList.add('active');
      
// Pulse animation
this.querySelector('circle').animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
     ], { duration: 500 });
   });
});

// Glavna interakcija
document.getElementById('timelineTrigger').addEventListener('mouseenter', function() {
  const dots = document.querySelectorAll('.phase-dot');
  dots.forEach((dot, i) => {
    dot.style.opacity = '1';
    dot.style.transitionDelay = `${i * 0.1}s`;
  });
});

// Reset na mouseleave
document.getElementById('timelineTrigger').addEventListener('mouseleave', function() {
  document.querySelectorAll('.phase-dot').forEach(dot => {
    dot.style.opacity = '0.5';
  });
});

// Rotacija partner logoa na hover
document.querySelectorAll('.partner-grid image').forEach(logo => {
  logo.addEventListener('mouseenter', function() {
    this.closest('rect').style.stroke = '#dddddd';
    this.style.filter = 'drop-shadow(0 0 5px rgba(255,235,59,0.8))';
  });
  
  logo.addEventListener('click', function() {
    // Otvori modal s detaljima partnera
    showPartnerModal(this.getAttribute('xlink:href'));
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("loaded");
          observer.unobserve(entry.target); // Samo jednom
        }
      });
    },
    {
      threshold: 0.3, // 30% mora biti vidljivo da se aktivira
    }
  );

  document.querySelectorAll(".whole").forEach((section) => {
    observer.observe(section);
  });
});

function observeSvgAnim() {
  const elements = document.querySelectorAll('.svg-anim');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-active');
        observer.unobserve(entry.target); // animacija se pokreće samo jednom
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
}
