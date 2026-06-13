let currentSlide = 0;
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoRotate = null;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function startAutoRotate() {
  if (autoRotate) clearInterval(autoRotate);
  autoRotate = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 4000);
}

const carouselContainer = document.querySelector('.carousel-container');
if (carouselContainer) {
  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoRotate));
  carouselContainer.addEventListener('mouseleave', startAutoRotate);
}

updateCarousel();
startAutoRotate();
