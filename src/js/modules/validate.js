function validate(mainForms, formName, formPhone, formEmail) {

    const forms = document.querySelectorAll(mainForms);
    let formError = true;

    //add listener for all forms on page

    forms.forEach(form => {
        // get input 'name' , 'phone' , 'email' in each form
        const name = form.querySelector(formName),
            phone = form.querySelector(formPhone),
            email = form.querySelector(formEmail),
            // regular expressions for validate
            nameReg = /^[a-zа-я_-]{2,16}$/i,
            phoneReg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        //function to create error message and check validate name
        function checkValidName() {

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
        function checkValidPhone() {

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
        function checkValidMail() {

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

        checkValidMail();
        checkValidName();
        checkValidPhone();

        //checking browser autocomplite before sent data to server
        form.addEventListener('submit', Event => {
            if (formError || name.value == '' || phone.value == '' || email.value == '') {
                Event.preventDefault();
            }
            if (name.value.match(nameReg) == null) {
                Event.preventDefault();
            }
            if (phone.value.match(phoneReg) == null) {
                Event.preventDefault();
            }
            if (email.value.match(emailReg) == null) {
                Event.preventDefault();
            }
        });

    });

}

export default validate;