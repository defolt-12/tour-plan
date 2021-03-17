const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
});

const rew = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    prevEl: '.reviews-slider__button--prev',
    nextEl: '.reviews-slider__button--next',
  },
});

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [7.8905900, 98.3981000],
            zoom: 15
          });
};

let paralax = document.getElementById('newsletter')
  this.addEventListener('scroll', function () {
    // paralax.style.opacity = 1 - +this.pageYOffset/800+''
    paralax.style.top = +this.pageYOffset/500+'2px'
    paralax.style.backgroundPositionY = - + +this.pageYOffset/3.5+'px'
});