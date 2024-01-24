// Menu button
const closeNavButton = document.querySelector(".close-nav-button");
const nav = document.querySelector("nav");
const openNavButton = document.querySelector(".hamburger-menu");

closeNavButton.addEventListener("click", () => {
    nav.classList.add("nav-close")
})

openNavButton.addEventListener("click", () => {
    nav.classList.remove("nav-close")
})


// Scroll buttons
const imageContainer = document.querySelector(".image-container");

document.querySelector(".scroll-button-left").addEventListener("click", () => {
    imageContainer.scrollLeft -= 300;
});

document.querySelector(".scroll-button-right").addEventListener("click", () => {
    imageContainer.scrollLeft += 300;
});

// Language selector
const languageSelector = document.getElementById("language-selector");
languageSelector.addEventListener("change", () => {
    if (languageSelector.value === "English") {
        document.body.classList.add("en");
    } else if (languageSelector.value === "Nederlands") {
        document.body.classList.remove("en");
    }
})