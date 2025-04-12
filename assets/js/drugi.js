// U credits.js
console.log("🎬 Psst... Želiš vidjeti bloopers? Kontaktiraj nas!"); 
// Ili neki inside joke za publiku

// Dodajte u drugi.js
document.querySelector('.clapper-panel').addEventListener('click', function() {
    this.style.transform = 'rotateX(10deg)';
    setTimeout(() => { this.style.transform = 'none'; }, 500);
});