// Gallery Lightbox Functionality 1
document.addEventListener('DOMContentLoaded', () => {
  // Lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<img class="lightbox-img">';
  document.body.appendChild(lightbox);

  // Click handlers
  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      const lightboxImg = lightbox.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  }); 
}); 
