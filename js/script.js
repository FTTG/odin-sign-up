const pass = document.querySelector('#pass');
const conpass = document.querySelector('#con-pass');
const btn = document.querySelector('#completed');

const inputs = document.querySelectorAll('input');

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
    });
});

btn.addEventListener('click', () => {
    inputs.forEach(field => field.required = true);
});