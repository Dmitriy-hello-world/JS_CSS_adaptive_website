function validate(mainForms, formName, formPhone, formEmail) {
    const forms = document.querySelectorAll(mainForms);

    let formError = true;

    forms.forEach(form => {
        const name = form.querySelector(formName),
            phone = form.querySelector(formPhone),
            email = form.querySelector(formEmail);

        function checkValidName() {

            let nameError = document.createElement('div');

            name.addEventListener('input', function () {

                let validName = this.value.match(/^[a-zа-я_-]{2,16}$/i);

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

        function checkValidPhone() {

            let phoneError = document.createElement('div');

            phone.addEventListener('input', function () {

                let validPhone = this.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);

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

        function checkValidMail() {

            let mailError = document.createElement('div');

            email.addEventListener('input', function () {

                let validMail = this.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

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

        checkValidMail();
        checkValidName();
        checkValidPhone();

        form.addEventListener('submit', Event => {
            if (formError || name.value == '' || phone.value == '' || email.value == '') {
                Event.preventDefault();
            }
            if (name.value.match(/^[a-zа-я_-]{2,16}$/i) == null) {
                Event.preventDefault();
            }
            if (phone.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) == null) {
                Event.preventDefault();
            }
            if (email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                Event.preventDefault();
            }
        });

    });

}

export default validate;