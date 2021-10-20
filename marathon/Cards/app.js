const slides = document.getElementsByClassName("slide");

function clearActiveClass() {
    for (let slide of slides) {
        slide.classList =  "slide";
    }
}

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClass(); 
        slide.classList.add("active");
        document.body.style.backgroundImage = document.getElementsByClassName("slide active")[0].style.backgroundImage;
    })
}