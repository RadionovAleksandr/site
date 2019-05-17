(function() {
    var link = document.querySelector(".conacts__btn");
    var popup = document.querySelector(".modal-window");
    var close = document.querySelector(".modal-window__close-btn");
    var login = document.querySelector("[name=login]");
    var form = document.querySelector(".modal-window__login-form");
    var email = document.querySelector("[name=email]");
    var textarea = document.querySelector("[name=textarea]");
    var storage = localStorage.getItem("login");
    // var slideBtn1 = document.querySelector(".slider__switch__btn--1");
    // var slideBtn2 = document.querySelector(".slider__switch__btn--2");
    // var slideBtn3 = document.querySelector(".slider__switch__btn--3");
    // var slideText1 = document.querySelector(".slider__text--1");
    // var slideText2 = document.querySelector(".slider__text--2");
    // var slideText3 = document.querySelector(".slider__text--3");
    // var slideImg = document.querySelector(".slider-img");
    // var slideImg1 = document.querySelector(".slider-img--1");
    // var slideImg2 = document.querySelector(".slider-img--2");
    // var slideImg3 = document.querySelector(".slider-img--3");
    // var slide1 = document.querySelectorAll('.slide__1');
    // var slide2 = document.querySelectorAll('.slide__2');
    // var slide3 = document.querySelectorAll('.slide__3');
    // var sliderImgs = document.querySelectorAll('.slider-img')
    var buttons = document.querySelectorAll('.slider__switch__btn');
    // var stylesData = [
    //     image1 = {
    //         right: 220,
    //         width: 700
    //     },
    //     image2 = {
    //         right: 180,
    //         width: 600
    //     },
    //     image3 = {
    //         width: 750,
    //         right: 180
    //     }
    // ]

    // dataSlide1 = {
    //     button: slideBtn1,
    //     image: slideImg1,
    //     text: slideText1
    // }

    // dataSlide2 = {
    //     button: slideBtn2,
    //     image: slideImg2,
    //     text: slideText2
    // }

    // dataSlide3 = {
    //     button: slideBtn3,
    //     image: slideImg3,
    //     text: slideText3
    // }
    // var slider = [dataSlide1, dataSlide2, dataSlide3];
    //  var blockSlider = document.querySelector('.advantages__slider');

    // var FOTO_DATA = [
    //     'img-nerds/slide1.png',
    //     'img-nerds/slide2.png',
    //     'img-nerds/slide3.png'
    // ];
    // var DESCRIPTION_DATA = [
    //     'Математически выверенный дизайн для вашео сайта или мобильного приложения',
    //     'Никакого креатива только математические формулы для расчета идеальных пропорций',
    //     'Работать днем как все? мы против этого. Ближе к полуночи работа только начинается'
    // ];
    // var TITLE_DATA = [
    //     'Долго, дорого, скрупулезно.',
    //     'Любим математику как никто другой',
    //     'Только ночь только хардкор.'
    // ];

    // var buttons = document.querySelectorAll('.slider__switch__btn');
    // sliderClass = ['slider-img--1', 'slider-img--2', 'slider-img--3'];

    // var sliderImg = document.querySelector('.slider-img');
    // console.log(stylesData[0].width)
    // console.log(stylesData[1].width)
    // console.log(stylesData[2].width)
    // console.log(sliderImg.width)
    // console.log(sliderImg.style.right)

    //слайдер от тимошки

    //  buttons.forEach(button => {
    //     button.addEventListener('click', onButtonClick);
    //  });

    var slides = document.querySelectorAll('.slider');

    var onButtonClick = function(evt) {
        var id = evt.target.dataset.id;
        slides.forEach(function(slide) {
            if (slide.dataset.id === id) {
                slide.classList.add('slide--active');
            } else {
                slide.classList.remove('slide--active');
            };
        })

        // теперь устанавливаем активной кнопочку
        buttons.forEach(function(btn) {
            if (btn.dataset.id === id) {
                btn.classList.add('slider__switch__btn--visited');
            } else {
                btn.classList.remove('slider__switch__btn--visited');
            }
        });
    }

    buttons.forEach(function(button) {
        if (!buttons) {
            return;
        }
        button.addEventListener('click', onButtonClick);
        console.log('клик');
    });
    /*
        // слайдер, вариант с подменной данных
        var clickButton = function(number) {
            blockSlider.querySelector('.slider-img').src = FOTO_DATA[number];
            sliderImgs = document.querySelectorAll('.slider-img')
            sliderImg.style.width = stylesData[number].width;
            sliderImg.style.right = stylesData[number].right;
            blockSlider.querySelector('.slider__text-description').textContent = DESCRIPTION_DATA[number];
            blockSlider.querySelector('.slider__title').textContent = TITLE_DATA[number];
            for (i = 0; i <= 2; i++) {
                if (buttons[i].classList.contains('slider__switch__btn--visited')) {
                    buttons[i].classList.toggle('slider__switch__btn--visited');
                }
            }
            buttons[number].classList.toggle('slider__switch__btn--visited');
        }

        //обработчики событий
        buttons[0].addEventListener("click", function() {
            clickButton(0);
            console.log('кнопка1')
        });
        buttons[1].addEventListener("click", function() {
            clickButton(1);
            console.log('кнопка2')
        });

        buttons[2].addEventListener("click", function() {
            clickButton(2);
            console.log('кнопка3')

        });
    */

    //код слайдера с созданием элементов
    /*
      (function() {
        var sliderImg = document.querySelector('.slider-img');
        var blockSlider = document.querySelector('.advantages__slider');
        var blockSlider = document.querySelector('.advantages__slider');
        var section = document.querySelector('.advantages')
        var fragment = document.createDocumentFragment();
        for (var i = 0; i <= 2; i++) {
          var sliderElement = blockSlider.cloneNode(true);

          sliderElement.querySelector('.slider-img').src = FOTO_DATA[i];
          sliderElement.querySelector('.slider__text-description').textContent = DESCRIPTION_DATA[i];
          sliderElement.querySelector('.slider__title').textContent = TITLE_DATA[i];
          // sliderImgs[i].classList.add('slider-img--' + i); // пытаюсь добавить i-ой картинке i-ый класс

          if (i != 0) {      //странное поведение если пишу if (i = 0) { sliderElement.classList.toggle('visually-hidden')} 
                                //результат, бескнечная загрузка страницы
          } else {
            sliderElement.classList.toggle('visually-hidden')
          }
          sliderElement.classList.add('clone');
          fragment.appendChild(sliderElement);
        }

        section.appendChild(fragment);

      })();

      var slider = document.querySelector('.advantages__slider');
      var sliderClone = document.querySelectorAll('.clone');

      // обработчики событий
      slideBtn1.addEventListener("click", function() {
        console.log('кнопка1')
        for(i = 0; i < 2; i++) {
          if (!sliderClone[i].classList.contains('visually-hidden')) {
            sliderClone[i].classList.toggle('visually-hidden');
        }
        if (sliderClone[0].classList.contains('visually-hidden')) {
          sliderClone[0].classList.toggle('visually-hidden');
        }
      });

      slideBtn2.addEventListener("click", function() {
        console.log('кнопка2')
        slider.classList.toggle('visually-hidden');
        sliderClone[1].classList.toggle('visually-hidden');
      });

      slideBtn3.addEventListener("click", function() {
        console.log('кнопка3')
        slider.classList.toggle('visually-hidden');
        sliderClone[2].classList.toggle('visually-hidden');
      });
    */
    /*
    var sliderActive = function(curenSlider, numberDisableFirst, numberDisabledSecond) {
      curenSlider.classList.remove("visually-hidden");
      curenSlider.classList.add("slider-show");
      numberDisableFirst.classList.remove("slider-show");
      numberDisableFirst.classList.add('visually-hidden');
      numberDisabledSecond.classList.add('hidden');
      numberDisabledSecond.classList.remove("slider-show");
    };

    var buttonActive = function (curenButton, buttonDisableFirst, buttonDisabledSecond) {
      curenButton.classList.add("slider__switch__btn--visited")
      buttonDisableFirst.classList.remove("slider__switch__btn--visited")
      buttonDisabledSecond.classList.remove("slider__switch__btn--visited")
    }

    slideBtn1.addEventListener("click", function() {

      buttonActive(slideBtn1, slideBtn2, slideBtn3)
      sliderActive(dataSlide1.image, dataSlide2.image, dataSlide3.image)
      sliderActive(dataSlide1.text, dataSlide2.text, dataSlide3.text)
    });

    slideBtn2.addEventListener("click", function() {

      buttonActive(slideBtn2, slideBtn1, slideBtn3)
      sliderActive(dataSlide2.image, dataSlide1.image, dataSlide3.image)
      sliderActive(dataSlide2.text, dataSlide1.text, dataSlide3.text)
    });

    slideBtn3.addEventListener("click", function() {

      buttonActive(slideBtn3, slideBtn1, slideBtn2)
      sliderActive(dataSlide3.image, dataSlide1.image, dataSlide2.image)
      sliderActive(dataSlide3.text, dataSlide1.text, dataSlide2.text)
    });

    link.addEventListener("click", function(evt) {
      console.log("Клик по ссылке напишите нам");
      evt.preventDefault();
      popup.classList.add("modal-show");
      if (storage) {
        login.value = storage;
      } else {
        login.focus();
      }
    });

    form.addEventListener("submit", function(evt) {
      if (!login.value || !email.value || !textarea.value) {
        evt.preventDefault();
        form.classList.add("modal-eror");
        console.log("Нужно ввести имя, почту и текст сообщения");
      } else {
        localStorage.setItem("login", login.value);
        email.focus();
        console.log(login.value);
        console.log(email.value);
        console.log(textarea.value);
        console.log("форма отпарвлена");
      }
    });

    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      console.log("Закрытие модального окна кликом");
      popup.classList.remove("modal-show");
      form.classList.remove("modal-eror");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
          console.log("Закрытие модального окна через Esc");
          popup.classList.remove("modal-show");
        }
      }
    }); */
})()