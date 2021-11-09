"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form_2');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error===0){

        }else {
            document.getElementsByClassName('form_name_2')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_phone_2')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_email_2')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_comment_2')[0].placeholder = 'Пожалуйста, заполните это поле';


        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req_2');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email_2')){
                if (emailTest(input)){
                    formAddError(input);
                    formAddErrorRed(input);
                    error++;

                }
            }else {
                if (input.value === '') {
                    formAddError(input);
                    formAddErrorRed(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error_2');
        input.classList.add('_error_2');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error_2');
        input.classList.remove('_error_2');
    }
    //функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function formAddErrorRed(input) {
        input.parentElement.classList.add('_red_2');
        input.classList.add('_red_2');
    }

});
