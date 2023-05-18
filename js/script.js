const pass = document.querySelector('#pass');
const conpass = document.querySelector('#con-pass');

conpass.addEventListener('input', () => {
    console.log('cambiando');
    if (conpass.value !== pass.value) {
        conpass.setCustomValidity('Passwords not matching');
    }
    else {
        conpass.setCustomValidity('');
    }
});