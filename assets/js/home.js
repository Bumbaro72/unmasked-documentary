// Home page scripts 1
console.log('Home page JS loaded');



// Dodajte u postojeći IntersectionObserver
const section3 = document.getElementById('section3');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('unmasked');
    }
  });
}, {threshold: 0.1});

observer.observe(section3);

#section3.unmasked .top-cover {
  transform: scaleY(0);
  transition-delay: 0.3s; /* Mali delay za dramatičnost */
}

#section3.unmasked .bottom-cover {
  transform: scaleY(0);
}