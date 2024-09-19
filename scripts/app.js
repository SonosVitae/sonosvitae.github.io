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

const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll(".filter-btn");
const musiclist = document.querySelectorAll(".music");

let musicIndex = 0;

musiclist.forEach((music) => {
    music.style.viewTransitionName = `conf-${++musicIndex}`;
});

filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let confCategory = e.target.getAttribute("data-filter");

        // Check if the browser supports startViewTransition
        if (typeof document.startViewTransition === 'function') {
            document.startViewTransition(() => {
                updateActiveButton(e.target);
                filterEvents(confCategory);
            });
        } else {
            // Fallback if startViewTransition is not available
            updateActiveButton(e.target);
            filterEvents(confCategory);
        }
    });
});

function updateActiveButton(newButton) {
    const currentActive = filterList.querySelector(".active");
    if (currentActive) {
        currentActive.classList.remove("active");
    }
    newButton.classList.add("active");
}

function filterEvents(filter) {
    musiclist.forEach((music) => {
        // Get each album's category
        let eventCategory = music.getAttribute("data-category");

        // Check if that category matches the filter
        if (filter === "all" || filter === eventCategory || eventCategory == "all") {
            music.removeAttribute("hidden");
        } else {
            music.setAttribute("hidden", "");
        }
    });
}

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

function onclick(event) {
    closeFullImg()
}