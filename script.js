const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdown = document.querySelector(".dropdown");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

dropdown.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
    e.preventDefault();
    dropdown.classList.toggle("active");
    }
});