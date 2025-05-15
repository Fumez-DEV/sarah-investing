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

  const form = document.getElementById('cta-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xwpoaygg', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.style.display = 'none';
      successMessage.style.display = 'block';
    } else {
      alert('אירעה שגיאה בשליחה. נסי שוב מאוחר יותר 🙁');
    }
  });
