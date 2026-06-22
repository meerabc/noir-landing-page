const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const menuLinks = document.getElementById("menu-links");
const hamburgerContainer = document.querySelector(".hamburger-container");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0)
        nav.classList.add("scrolled");
    else
        nav.classList.remove("scrolled");
});

hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    menuLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!hamburgerContainer.contains(e.target)) {
        menuLinks.classList.remove("active"); 
    }
});

menuLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("active");
    });
});