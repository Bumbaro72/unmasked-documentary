// Basic form handling 1
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.contact-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! We\'ll respond soon.');
      form.reset();
    });
  });
});

// Netlify Form Handling
document.addEventListener('DOMContentLoaded', () => {
    // Success message from URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('form-submitted') {
      alert('Thank you! Your message has been sent.');
      history.replaceState(null, '', window.location.pathname);
    }
  });
