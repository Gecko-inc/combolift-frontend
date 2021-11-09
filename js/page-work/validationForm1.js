"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error===0){

        }else {
            document.getElementsByClassName('form_name')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_phone')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_email')[0].placeholder = 'Пожалуйста, заполните это поле';
            document.getElementsByClassName('form_comment')[0].placeholder = 'Пожалуйста, заполните это поле';


        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    formAddErrorRed(input);
                    error++;

                }
            }
            else {
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
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function formAddErrorRed(input) {
        input.parentElement.classList.add('_red');
        input.classList.add('_red');
    }

});


// }else if (input.classList.contains('_tel')){
//     if (input.value <= 10) {
//         formAddError(input);
//         formAddErrorRed(input);
//         error++;
//     }
// }


// function tel(input) {
//     input.parentElement.classList.add('_red');
//     input.classList.add('_red');
// }