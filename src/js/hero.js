const button = document.querySelector(".hero-button");

button.addEventListener("click", event => {
    document.getElementById("contacts").scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})