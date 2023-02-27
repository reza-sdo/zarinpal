const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector(".cross-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu")



hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show-hamburger-menu");
});
