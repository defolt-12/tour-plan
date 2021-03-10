const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});

