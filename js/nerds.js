
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
var slide1 = document.querySelector(".slider__text--1");
var slide2 = document.querySelector(".slider__text--2");
var slide3 = document.querySelector(".slider__text--3");
var slideImg1 = document.querySelector(".slider-img--1");
var slideImg2 = document.querySelector(".slider-img--2");
var slideImg3 = document.querySelector(".slider-img--3");
var btnVisited = document.querySelector(".slider__switch__btn--visited");



slideBtn1.addEventListener("click", function(evt) {
  console.log("Клик по ссылке по слайдеру1");
  evt.preventDefault();

  slide2.classList.remove("slider-show");
  slideImg2.classList.remove("slider-show");
  slideBtn2.classList.remove("slider__switch__btn--visited")

  slide3.classList.remove("slider-show");
  slideImg3.classList.remove("slider-show");
  slideBtn3.classList.remove("slider__switch__btn--visited")

  slide1.classList.add("slider-show");
  slide1.classList.remove("visually-hidden");
  slideImg1.classList.add("slider-show");
  slideImg1.classList.remove("visually-hidden");
  slideBtn1.classList.add("slider__switch__btn--visited")
  
  console.log("Активация кнопки слайдер1");
});

slideBtn2.addEventListener("click", function(evt) {
  console.log("Клик по ссылке по слайдеру2");
  evt.preventDefault();
 
  slide1.classList.remove("slider-show");
  slide1.classList.add("visually-hidden");
  slideImg1.classList.remove("slider-show");
  slideImg1.classList.add("visually-hidden");
  slideBtn1.classList.remove("slider__switch__btn--visited")
  
  slide3.classList.remove("slider-show");
  slideImg3.classList.remove("slider-show");
  slideBtn3.classList.remove("slider__switch__btn--visited")

  slide2.classList.add("slider-show");
  slideImg2.classList.add("slider-show");
  slideBtn2.classList.add("slider__switch__btn--visited")
  console.log("Активация кнопки слайдер2");
});

slideBtn3.addEventListener("click", function(evt) {
  console.log("Клик по ссылке по слайдеру2");
  evt.preventDefault();

  slide1.classList.remove("slider-show");
  slide1.classList.add("visually-hidden");
  slideImg1.classList.remove("slider-show");
  slideImg1.classList.add("visually-hidden");
  slideBtn1.classList.remove("slider__switch__btn--visited")

  slide2.classList.remove("slider-show");
  slideImg2.classList.remove("slider-show");
  slideBtn2.classList.remove("slider__switch__btn--visited")

  slide3.classList.add("slider-show");
  slideImg3.classList.add("slider-show");
  slideBtn3.classList.add("slider__switch__btn--visited")
  console.log("Активация кнопки слайдер2");
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


