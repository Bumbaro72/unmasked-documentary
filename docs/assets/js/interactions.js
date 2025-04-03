// Example of a toggleable menu 1
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
});
