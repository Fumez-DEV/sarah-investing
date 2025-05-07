document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Anchor Links
    const scrollLinks = document.querySelectorAll("a[href^='#']");

    scrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetID = this.getAttribute("href")?.substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.classList.toggle("open");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                menuToggle.classList.remove("open");
            });
        });
    }

    // Add 'scrolled' class to header
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }
});