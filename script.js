document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll("a[href^='#']");

    scrollLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetID = this.getAttribute("href")?.substring(1);
            if (!targetID) return; // Skip if href is invalid or missing

            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for header height
                    behavior: "smooth"
                });
            } else {
                console.warn(`Target element with ID '${targetID}' not found.`);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });

    // Close menu when clicking a link (for smooth navigation)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.classList.remove("open");
        });
    });

    // Add 'scrolled' class to header when scrolling
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});
