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

