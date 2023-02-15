const slideshowImage = document.getElementById("gallery-image");
const paintingName = document.getElementById("header-painting-name");

let currentSlide = 0;

showSlide();

function showSlide() {
    
    if(currentSlide >= slideshowImages.length) {
        currentSlide = 0;
    }
        slideshowImage.setAttribute("src", slideshowImages[currentSlide].src);
        slideshowImage.setAttribute("alt", slideshowImages[currentSlide].name);
        paintingName.innerHTML = slideshowImages[currentSlide].name;
        currentSlide++;

    setTimeout(function() {
        showSlide();
    }, 5000);
}