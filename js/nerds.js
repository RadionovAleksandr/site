
var link = document.querySelector(".conacts__btn");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-window__close-btn");
var login = document.querySelector("[name=login]");
var form = document.querySelector(".modal-window__login-form");
var email = document.querySelector("[name=email]");
var textarea = document.querySelector("[name=textarea]");
var storage = localStorage.getItem("login");
var slideBtn1 = document.querySelector(".slider__switch__btn--1");
var slideBtn2 = document.querySelector(".slider__switch__btn--2");
var slideBtn3 = document.querySelector(".slider__switch__btn--3");
var slideText1 = document.querySelector(".slider__text--1");
var slideText2 = document.querySelector(".slider__text--2");
var slideText3 = document.querySelector(".slider__text--3");
var slideImg1 = document.querySelector(".slider-img--1");
var slideImg2 = document.querySelector(".slider-img--2");
var slideImg3 = document.querySelector(".slider-img--3");
var slide1 = document.querySelectorAll('.slide__1');
var slide2 = document.querySelectorAll('.slide__2');
var slide3 = document.querySelectorAll('.slide__3');


dataSlide1 = {
  button: slideBtn1,
  image: slideImg1,
  text: slideText1
}

dataSlide2 = {
  button: slideBtn2,
  image: slideImg2,
  text: slideText2
}

dataSlide3 = {
  button: slideBtn3,
  image: slideImg3,
  text: slideText3
}
var slider = [dataSlide1, dataSlide2, dataSlide3];

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
});
