const pass = document.querySelector('#pass');
const conpass = document.querySelector('#con-pass');
const btn = document.querySelector('#completed');
const errorMsg = document.querySelector('.error-msg');

const inputs = document.querySelectorAll('input');

let firstcheck = false;

conpass.addEventListener('input', () => {
    console.log('cambiando');
    if (conpass.value !== pass.value) {
        conpass.setCustomValidity('Passwords not matching');
    }
    else {
        conpass.setCustomValidity('');
    }
});

inputs.forEach(field => {
    field.addEventListener('blur', () => {
        field.required = true;
        if (field.checkValidity() == false) {
            field.nextElementSibling.classList.add('show-error');
            console.log('add error');
        }
        else {
            field.nextElementSibling.classList.remove('show-error');
            console.log('remove error');
        }
        field.classList.add('checked');
    });
});

inputs.forEach(field => {
    field.addEventListener('input', () => {
        console.log('input registered');
        if (field.classList.contains('checked') && field.checkValidity() == true) {
            console.log(field.checkValidity());
            field.nextElementSibling.classList.remove('show-error');
        }
    });
});

btn.addEventListener('click', () => {
    inputs.forEach(field => field.required = true);
});