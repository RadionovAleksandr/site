<script> 
    var link = document.querySelector(".conacts__btn");
    var popup = document.querySelector(".modal-widow");
    var close = document.querySelector(".modal-window__close-btn");
    var login = document.querySelector("[name=login]");
    var form = document.querySelector(".modal-window__login-form");
    var email = document.querySelector("[name=email]");
    var textarea = document.querySelector("[name=textarea]");
    var storage = localStorage.getItem("login");


    link.addEventListener("click", function (evt) {
        console.log("Клик по ссылке напишите нам");
        evt.preventDefault();
        popup.classList.add("modal-show");
        login.focus();
        if (storage) {
            login.value = storage;
}
    });

    close.addEventListener("click", function (evt) {
        evt.prevetDefault();
        popup.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value || !textarea.value) {
        evt.prevetDefault();
        console.log("Нужно ввести имя, почту и текст сообщения");
        console.log(login.value);
        console.log(email.value);
        console.log(textarea.value);
        } else {
            localStorage.setItem("login", login.value);
            email.focus();
        }
    });

        widow.addEventListener("keydown", function (evt)) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
    });
</script>    
