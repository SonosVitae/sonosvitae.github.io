// Parallax Scroll
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset;

    // Move the background slower
    document.querySelector('.green').style.transform = `translateY(${scrollTop * 0.6}px)`;

    // Move the foreground faster
    document.querySelector('.leaves').style.transform = `translateY(${scrollTop * 0.3}px)`;
});

// Navigation Slide-in for Mobile
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''; // Reset animation
            } else {
                link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.2}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();