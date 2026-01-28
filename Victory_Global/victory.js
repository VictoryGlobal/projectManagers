


let slideIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.slides img');

slides.style.width = `${images.length * 100}%`; // set slides width
images.forEach((img) => {
    img.style.width = `${100 / images.length}%`; // set image width
});

setInterval(() => {
    slideIndex++;
    if (slideIndex >= dots.length) slideIndex = 0;
    updateSlider();
}, 3000);

function updateSlider() {
    slides.style.transform = `translateX(-${slideIndex * 100 / images.length}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}