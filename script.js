const images = ['images/hermance-dreano-render-final-2.jpg','images/hermance-dreano-render-final9.jpg', 'images/hermance-dreano-afishtale.jpg', 'images/hermance-dreano-mushrooms.jpg', 'images/hermance-dreano-hometownchachacha.jpg']; 
let currentIndex = 0;

function changeImage() {
    const image = document.getElementById('slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
}

setInterval(changeImage, 3000);