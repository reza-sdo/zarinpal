const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector(".cross-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu")
const showMoreMenu = document.querySelector("#show-more-menu")
const showProductMenu = document.querySelector("#show-product-menu")

hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.add("show-hamburger-menu");
});

crossIcon.addEventListener("click", () => {
    hamburgerMenu.classList.remove("show-hamburger-menu");
});
showMoreMenu.addEventListener("mouseenter",e=>{
    const ul = e.target.childNodes[5]
    ul.style.animation = "showUp 0.35s 1"
    ul.style.display = "block"
})
showMoreMenu.addEventListener("mouseleave",e=>{
    const ul = e.target.childNodes[5]
    ul.style.display = "none"
})

showProductMenu.addEventListener("mouseenter",e=>{
    const div = e.target.childNodes[5]
    div.style.animation = "showUp 0.35s 1"
    div.style.display = "flex"
})
showProductMenu.addEventListener("mouseleave",e=>{
    const div = e.target.childNodes[5]
    div.style.display = "none"
})