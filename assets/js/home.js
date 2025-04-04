// Home page scripts 1
console.log('Home page JS loaded');



const section3 = document.getElementById('section3');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('unmasked');
      
      // Remove curtains after animation
      setTimeout(() => {
        const curtains = entry.target.querySelectorAll('.unmask-curtain');
        curtains.forEach(curtain => curtain.style.display = 'none');
      }, 1500);
    }
  });
}, { 
  threshold: 0.25,
  rootMargin: '0px 0px -100px 0px'
});

observer.observe(section3);