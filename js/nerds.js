(function() {
    var link = document.querySelector(".conacts__btn");
    var popup = document.querySelector(".modal-window");
    var close = document.querySelector(".modal-window__close-btn");
    var login = document.querySelector("[name=login]");
    var form = document.querySelector(".modal-window__login-form");
    var email = document.querySelector("[name=email]");
    var textarea = document.querySelector("[name=textarea]");
    // var storage = window.localStorage.getItem("login");
    var buttons = document.querySelectorAll('.slider__toggle');


    var slides = document.querySelectorAll('.slider');


    var onButtonClick = function(evt) {
            var id = evt.target.dataset.id;
            console.log(id);
            for (i = 0; i < slides.length; i++) {

                if (slides[i].dataset.id === id) {
                    slides[i].classList.add('slide--active');
                } else {
                    slides[i].classList.remove('slide--active');
                }

            }
        }
        // var onButtonClick = function(evt) {
        //     var id = evt.target.dataset.id;
        //     slides.forEach(function(slide) {
        //         if (slide.dataset.id === id) {
        //             slide.classList.add('slide--active');
        //         } else {
        //             slide.classList.remove('slide--active');
        //         };
        //     })

    // теперь устанавливаем активной кнопочку
    // здесь расскомментировать
    // for (i = 0; i < buttons.length; i++) {

    //     if (btn.dataset.id === id) {
    //         btn.classList.add('slider__toggle--visited');
    //     } else {
    //         btn.classList.remove('slider__toggle--visited');
    //     }

    // }

    // buttons.forEach(function(btn) {
    //     if (btn.dataset.id === id) {
    //         btn.classList.add('slider__toggle--visited');
    //     } else {
    //         btn.classList.remove('slider__toggle--visited');
    //     }
    // });


    for (i = 0; i < buttons.length; i++) {
        if (!buttons) {
            return;
        }
        buttons[i].addEventListener('click', onButtonClick);
        console.log('клик');
    };

    // buttons.forEach(function(button) {
    //     if (!buttons) {
    //         return;
    //     }
    //     button.addEventListener('click', onButtonClick);
    //     console.log('клик');
    // });


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

    // создаю масиивы с данными карточек каталога, и наполняю каталог карточками с данными

    var cardData = [
        card1 = {
            cardTitle: 'SEDONA',
            cardImg: "img-nerds/img-sedona.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '9 900 РУБ'
        },
        card2 = {
            cardTitle: 'PINK',
            cardImg: "img-nerds/img-pink.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '10 000 РУБ'
        },
        card3 = {
            cardTitle: 'БАРБЕРШОП',
            cardImg: "img-nerds/img-barbershop.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '11 000 РУБ'
        },
        card4 = {
            cardTitle: "mishka",
            cardImg: "img-nerds/img-mishka.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '18 000 РУБ',
        },
        card5 = {
            cardTitle: 'APLUS',
            cardImg: "img-nerds/img-aplus.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '9 500 РУБ',
        },
        card6 = {
            cardTitle: 'KVAST',
            cardImg: "img-nerds/img-kvast.jpg",
            cardText: 'Информационный сайтдля туристов',
            cardPrice: '9 800 РУБ',
        },

    ];

    var ListElement = document.querySelector('.catalog');
    var fragment = document.createDocumentFragment();

    var createCard = function(create) {
        var cardTemplate = document.querySelector('#card')

        for (var i = 0; i < create; i++) {
            var catalogElement = cardTemplate.cloneNode(true);
            catalogElement.querySelector('.card__item-img').src = cardData[i].cardImg;
            catalogElement.querySelector('.card__title').textContent = cardData[i].cardTitle;
            catalogElement.querySelector('.card__text').textContent = cardData[i].cardText;
            catalogElement.querySelector('.card__button').textContent = cardData[i].cardPrice;
            fragment.appendChild(catalogElement);
        }
        ListElement.appendChild(fragment);
    }
    if (ListElement) {
        createCard(cardData.length);
    };
})();