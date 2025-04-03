// Simple fade-in animation 1
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;

    const fade = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(fade);
        }
        opacity += 0.05;
        element.style.opacity = opacity;
    }, 50);
}

document.querySelectorAll(".fade-in").forEach(element => {
    fadeIn(element);
});
