(function() {
    var link = document.querySelector(".conacts__btn");
    var popup = document.querySelector(".modal-window");
    var close = document.querySelector(".modal-window__close-btn");
    var login = document.querySelector("[name=login]");
    var form = document.querySelector(".modal-window__login-form");
    var email = document.querySelector("[name=email]");
    var textarea = document.querySelector("[name=textarea]");
    var storage = localStorage.getItem("login");
    var buttons = document.querySelectorAll('.slider__toggle');


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
                btn.classList.add('slider__toggle--visited');
            } else {
                btn.classList.remove('slider__toggle--visited');
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
    var cardTitleData = ['SEDONA', 'PINK', 'БАРБЕРШОП', 'MISHKA', 'APLUS', 'KVAST'];
    var cardImgData = [
        "img-nerds/img-sedona.jpg",
        "img-nerds/img-pink.jpg",
        "img-nerds/img-barbershop.jpg",
        "img-nerds/img-mishka.jpg",
        "img-nerds/img-aplus.jpg",
        "img-nerds/img-kvast.jpg"
    ];
    var cardTextData = ['Информационный сайтдля туристов',
        'Информационный сайтдля туристов',
        'Информационный сайтдля туристов',
        'Информационный сайтдля туристов',
        'Информационный сайтдля туристов',
        'Информационный сайтдля туристов'
    ];

    var cardPriceData = ['9 900 РУБ', '10 000 РУБ', '11 000 РУБ', '9 000 РУБ', '9 500 РУБ', '9 800 РУБ'];
    var ListElement = document.querySelector('.catalog');
    var fragment = document.createDocumentFragment();
    var cardTemplate = document.querySelector('#card')
        .content
        .querySelector('.card');

    var createCard = function(create) {
        for (var i = 0; i < create; i++) {
            var catalogElement = cardTemplate.cloneNode(true);
            catalogElement.querySelector('.card__item-img').src = cardImgData[i];
            catalogElement.querySelector('.card__title').textContent = cardTitleData[i];
            catalogElement.querySelector('.card__text').textContent = cardTextData[i];
            catalogElement.querySelector('.card__button').textContent = cardPriceData[i];
            fragment.appendChild(catalogElement);
        }
        ListElement.appendChild(fragment);
    }
    createCard(6);
})();