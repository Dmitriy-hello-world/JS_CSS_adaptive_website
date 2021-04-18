import {
    modalOpen,
    modalClose
} from './modal';

function validate({
    mainForms,
    formName,
    formPhone,
    formEmail,
    modalThanks,
    modalOrder,
    modalBuy,
    back
}) {

    const forms = document.querySelectorAll(mainForms),
        overlay = document.querySelector(back),
        order = document.querySelector(modalOrder),
        buy = document.querySelector(modalBuy),
        tnks = document.querySelector(modalThanks),
        // regular expressions for validate
        nameReg = /^[a-zа-я_-]{2,16}$/i,
        phoneReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let formError = true;

    //function to create error message and check validate name
    function checkValidName(name) {

        let nameError = document.createElement('div');

        name.addEventListener('input', function () {

            let validName = this.value.match(nameReg);

            nameError.remove();
            this.style.border = '';

            if (validName) {
                formError = false;

            } else {
                formError = true;

                nameError.textContent = "Пожалуйста введите действительное имя";
                nameError.classList.add('formError');
                this.after(nameError);

                this.style.border = '2px solid red';

            }

        });
    }

    //function to create error message and check validate phone
    function checkValidPhone(phone) {

        let phoneError = document.createElement('div');

        phone.addEventListener('input', function () {

            let validPhone = this.value.match(phoneReg);

            phoneError.remove();
            this.style.border = '';

            if (validPhone) {
                formError = false;

            } else {
                formError = true;

                phoneError.textContent = "Пожалуйста введите корректный номер телефона";
                phoneError.classList.add('formError');
                this.after(phoneError);

                this.style.border = '2px solid red';

            }

        });

    }

    //function to create error message and check validate email
    function checkValidMail(email) {

        let mailError = document.createElement('div');

        email.addEventListener('input', function () {

            let validMail = this.value.match(emailReg);

            mailError.remove();
            this.style.border = '';

            if (validMail) {
                formError = false;

            } else {
                formError = true;

                mailError.textContent = "Пожалуйста введите корректный E-mail";
                mailError.classList.add('formError');
                this.after(mailError);

                this.style.border = '2px solid red';

            }

        });

    }

    //add listener for all forms on page

    forms.forEach(form => {
        // get input 'name' , 'phone' , 'email' in each form
        const name = form.querySelector(formName),
            phone = form.querySelector(formPhone),
            email = form.querySelector(formEmail);

        checkValidMail(email);
        checkValidName(name);
        checkValidPhone(phone);

        //checking browser autocomplite before sent data to server
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (!formError && name.value != '' && phone.value != '' &&
                email.value != '' && name.value.match(nameReg) != null &&
                phone.value.match(phoneReg) != null && email.value.match(emailReg) != null) {

                const formData = new FormData(this),
                    spinner = document.createElement('img');

                spinner.src = './images/form/spinner.svg';
                spinner.style.cssText = "display: block; margin: 5px auto;";
                form.insertAdjacentElement('beforeend', spinner);

                postData('./mailer/smart.php', formData)
                    .then(response => {
                        console.log('Отправка письма прошла успшено');

                        spinner.remove();
                        showThanksModal();
                    })
                    .catch(() => {
                        console.log('Произошла ошибка при отправке письма');

                        spinner.remove();
                        showThanksModal(1);
                    })
                    .finally(() => {
                        form.reset();
                    });

            }
        });

    });

    function showThanksModal(sendError = false) {
        modalOpen(tnks, overlay, order, buy, tnks);

        if (sendError) {
            tnks.innerHTML = '<div class="modal__header">Упс.. произошла ошибка. Попробуйте повторить отправку через несколько минут!</div><div class="modal__close">&#10005;</div>';
        } else {
            tnks.innerHTML = '<div class="modal__header">Спасибо за вашу заявку!</div><div class="modal__subheader">Наш менеджер свяжется с вами в ближайшее время!</div><div class="modal__close">&#10005;</div>';
        }

        setTimeout(() => {
            modalClose(overlay, order, buy, tnks);
        }, 4000);
    }

    async function postData(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            body: body
        });

        return response.text();
    }
}

export default validate;