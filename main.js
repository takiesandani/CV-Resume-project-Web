document.addEventListener('DOMContentLoaded', function () {
  // Hamburger nav
  const navToggle = document.getElementById('navToggle');
  const navList = document.querySelector('nav ul');
  navToggle.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });

  // Animated skill bars
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    setTimeout(() => {
      bar.style.width = bar.dataset.width + '%';
    }, 400);
  });

  // Projects carousel
  const track = document.getElementById('carouselTrack');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  let idx = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${idx * 320}px)`;
  }
  prevBtn.addEventListener('click', () => {
    idx = (idx - 1 + items.length) % items.length;
    updateCarousel();
  });
  nextBtn.addEventListener('click', () => {
    idx = (idx + 1) % items.length;
    updateCarousel();
  });
});