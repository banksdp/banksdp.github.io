// Add this JavaScript for mobile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.nav-link');
        dropdownBtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent navigation on mobile
                dropdown.classList.toggle('active');
            }
        });
    });
});