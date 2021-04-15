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

let menuButton = document.querySelector(".burger");
menuButton.addEventListener('click', function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".nav")
  .classList.toggle("nav--visible");
});

document.addEventListener('click', event => {
  const target = event.target;
  if ( target.matches(".button") ) {
    document.querySelector(".modal__dialog").classList.add("modal__dialog--visible");
    document.querySelector(".modal__overlay").classList.add("modal__overlay--visible");
  };
});

document.addEventListener('click', event => {
  const target = event.target;
  if ( target.matches('.card-button') ) {
    document.querySelector(".modal__dialog").classList.add("modal__dialog--visible");
    document.querySelector(".modal__overlay").classList.add("modal__overlay--visible");
  };
});

document.addEventListener('click', event => {
  let target = event.target;

  target = target.closest('.modal__close');

  if (target) {
    document.querySelector(".modal__dialog").classList.remove("modal__dialog--visible");
    document.querySelector(".modal__overlay").classList.remove("modal__overlay--visible");
  }
});

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 27:
        document.querySelector(".modal__dialog").classList.remove("modal__dialog--visible");
        document.querySelector(".modal__overlay").classList.remove("modal__overlay--visible");
        break;
  }
};


$('.form').each(function() {
  $(this).validate({
  messages: {
    name: {
      required: "Please specify your name",
      minlength: "Enter at least 2 characters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
      required: "Please specify your phone",
      minlength: "Enter your phone in international format"
    }
  }
}
);
})


$('.phone-mask').mask('+7 (999) 999-99-99',  {
  'translation': {
    9: { pattern: /[0-9*]/ }
  }
}); 

AOS.init();
  $("input:text:visible:first").focus();

