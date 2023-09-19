// script.js
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex); // Show the first image initially
setInterval(changeImage, 2000); // Change the image every 5 seconds
