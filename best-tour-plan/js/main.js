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

// ymaps.ready(init);

// function init() {
//     var myMap = new ymaps.Map("map", {
//             center: [7.8905900, 98.3981000],
//             zoom: 15
//           });
// };

let paralax = document.getElementById('newsletter')
  this.addEventListener('scroll', function () {
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
      required: "Enter your name",
      minlength: "Name not shorter than 2 letters",
    },
    email: {
      required: "Enter your email address",
      email: "The email format is name@domain.com",
    },
    phone: {
      required: "Enter your phone number",
      minlength: "Phone type: +7 (999) 999-99-99",
    },
    text: {
      required: "Enter your location",
    },
  },
});
});


$('.phone-mask').mask('+7 (999) 999-99-99',  {
  'translation': {
    9: { pattern: /[0-9*]/ }
  }
}); 

AOS.init();

AOS.init({
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
  });

const image = document.querySelector('.ymap-container-img');
//Переменная для включения/отключения индикатора загрузки
// var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [7.8905900, 98.3981000], // координаты центра на карте
    zoom: 15, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer);
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
    console.log(123);
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
                // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
                // Показываем индикатор загрузки до тех пор, пока карта не загрузится
 
                // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
          ymaps.load(init);
          image.style.display = "none";
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

selector.addEventListener('ymap-container', function() {

  
}, {once: true});