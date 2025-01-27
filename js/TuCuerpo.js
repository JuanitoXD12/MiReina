let currentSlide = 0;
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}
