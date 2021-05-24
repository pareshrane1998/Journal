/* Author: 

*/

// js for navigation button
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
const navbarLinks2 = document.getElementsByClassName("navbar-links2")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});


toggleButton.addEventListener("click", () => {
    navbarLinks2.classList.toggle("active")
});

// js for slider

let slideIndex = 0;
let slider = document.querySelector(".slider");
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");

showslide();

function plusslide(position) {
    slideIndex += position;

    if(slideIndex > slide.length) {
        slideIndex = 1;
        
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
        
    }

    for(let i = 0; i < dots.length; i++){
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

function currentslide(index) {
    if(index > slide.length) {
        index = 1;
        
    }
    else if (index < 1) {
        index = slide.length;
        
    }

    for(let i = 0; i < dots.length; i++){
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${index - 1}00%`;
    dots[index - 1].classList.add("dot-active");

    slideIndex = index;

}

//https://www.youtube.com/watch?v=7IBd7vI-jxY

function showslide() {
    slideIndex++;
    if(slideIndex > slide.length) {
        slideIndex = 1;
        
    }
    else if (slideIndex < 1) {
        slideIndex = slide.length;
        
    }

    for(let i = 0; i < dots.length; i++){
        const element = dots[i];
        element.classList.remove("dot-active");
    }

    slides.style.left = `-${slideIndex - 1}00%`;
    dots[slideIndex - 1].classList.add("dot-active");
}

let interval = setInterval(()=> {
    showslide();
} , 3000); //change every image after 3 seconds

slider.addEventListener("mouseover", ()=> {
    clearInterval(interval);  // on hover stop change every image after 3 seconds
});

slider.addEventListener("mouseout", ()=> {
        interval = setInterval(()=> {
        showslide();
    } , 3000) // on mouseout from slide again start change every image after 3s
});





















