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


// let modalOverlay = document.querySelector(".bookig__button");
// modalOverlay.addEventListener('click', function () {
//   console.log("Клик по кнопке меню");
//   document.querySelector(".modal__overlay")
//   .classList.add("modal__overlay--visible");
// });

let modalDialog = document.querySelector(".button");
modalDialog.addEventListener('click', function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".modal__dialog").classList.add("modal__dialog--visible");
  document.querySelector(".modal__overlay").classList.add("modal__overlay--visible");
});

// let modalOverlay = document.querySelector(".button");
// modalOverlay.addEventListener('click', function () {
//   console.log("Клик по кнопке меню");
//   document.querySelector(".modal__overlay")
//   .classList.toggle("modal__overlay--visible");
// });




// let btns          = document.querySelectorAll('.button');
// let modalOverlay  = document.querySelector('.modal__overlay');
// let modalDialog   = document.querySelector('.modal__dialog');
// // let modalClose    = document.querySelector('.modal__close');
// // let modals = document.querySelector('.modal');

// btns.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');
//     document.querySelector(`[data-target="${path}"]`).classList.toggle('modal__dialog--visible');
//     modalDialog.classList.toggle('modal__dialog--visible');
// 		// modals.forEach((el) => {
// 		// 	el.classList.remove('modal__dialog--visible');
// 		// });

// 	});
// });

// let close = document.querySelector('.modal__close');
//   close.addEventListener('click' , function () {
//     modalOverlay.style.display = 'none',
//     modalDialog.style.display = 'none'
//   });

//   let closeOverlay = document.querySelector('.modal__overlay');
//   closeOverlay.addEventListener('click' , function () {
//     modalOverlay.style.display = 'none',
//     modalDialog.style.display = 'none'
//   });

// modalDialog.addEventListener('click', function(e) {
//   document.querySelector('.modal__dialog--visible').classList.remove('visible');
//   this.classList.remove('active');
// });
// modalClose.addEventListener('click', (e) => {

//   // if (e.target == modalOverlay) {
// 	// 	modalOverlay.classList.remove('modal__dialog--visible');
//   // modalClose.forEach((el) => {
// 	// 		el.classList.remove('modal__dialog--visible');
// 	// 	});
// 	// }


//   // modals.forEach((el) => {
//   //   el.classList.remove('modal--visible')
//   // });
//   modalClose.classList.remove('modal__dialog--visible');
//   // modalOverlay.classList.remove('modal__overlay--visible');
// });