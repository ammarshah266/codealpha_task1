let images = document.querySelectorAll(".gallery img");

let current = 0;

function nextImage() {

    images[current].style.border = "none";

    current++;

    if (current >= images.length) {
        current = 0;
    }

    images[current].style.border = "5px solid red";
}

function prevImage() {

    images[current].style.border = "none";

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    images[current].style.border = "5px solid red";
}