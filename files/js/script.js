window.addEventListener("load", (event) => {
    setTimeout(() => {
        document.querySelector('.logo').style.animation = "image 1s cubic-bezier(0.22, 1, 0.36, 1) forwards"
    }, 800);

    setTimeout(() => {
        document.querySelector('.text').style.opacity = 1
    }, 1300);
});