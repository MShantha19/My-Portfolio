document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});
