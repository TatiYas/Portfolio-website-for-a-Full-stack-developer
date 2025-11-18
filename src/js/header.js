const switcSliders = document.querySelectorAll('[name="slider"]');

const mobMenuOpen = document.querySelector(".mob-menu-btn");
const mobMenuClose = document.querySelector(".mob-menu-btn-close");
const mobMenu = document.querySelector(".mob-menu");
const hederMenu = document.querySelector(".header-nav-menu");
const anchors = document.querySelectorAll('a[href*="#"]')

import {toggleTheme} from "./theme-module.js";

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

for(let switcSlider of switcSliders) {
    switcSlider.addEventListener("click", event => {
        toggleTheme();
    })
}
    
mobMenuOpen.addEventListener("click", event => {
    mobMenu.classList.add("is-open");
})
mobMenuClose.addEventListener("click", event => {
    mobMenu.classList.remove("is-open");
})

mobMenu.addEventListener('click', event => {
    const name = event.target.name;
    if(name === "About-me" || name === "Projects" || name === "Contacts") {
        mobMenu.classList.remove("is-open");
    }else {
        return;
    }
})