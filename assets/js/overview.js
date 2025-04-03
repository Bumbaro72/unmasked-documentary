// Overview page scripts 1
console.log('Overview JS loaded');

// Optional: Synchronized scrolling
document.addEventListener('DOMContentLoaded', () => {
  const enContent = document.querySelector('.content-half[lang="en"] .scroll-content');
  const frContent = document.querySelector('.content-half[lang="fr"] .scroll-content');
  
  if (enContent && frContent) {
    enContent.addEventListener('scroll', () => {
      frContent.scrollTop = enContent.scrollTop;
    }); 
  }
});
