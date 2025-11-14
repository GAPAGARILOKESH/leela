let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const slidesToShow = 3;

function updateCarousel() {
  const slideWidth = slides[0].offsetWidth + 24;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'left-tilt', 'right-tilt');

    if (i === currentIndex + 1) {
      slide.classList.add('active'); // center slide
    } else if (i === currentIndex) {
      slide.classList.add('left-tilt');
    } else if (i === currentIndex + 2) {
      slide.classList.add('right-tilt');
    }
  });
}


function nextSlide() {
  if (currentIndex < slides.length - slidesToShow) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

window.addEventListener('resize', updateCarousel);
updateCarousel();
