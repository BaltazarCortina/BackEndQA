var validations = document.createElement('ul');

var btn = document.querySelector('#run-validations');
btn.addEventListener('click', runValidations);

function runValidations() {
    formExists();
    numberOfFields(2);
    requiredFields();
    labels();
    linkToOtherPage('Register','register.html');
    dontHaveAnAccount('register.html');
    checkButton('reset', 'Reset');
    checkButton('submit', 'Sign in');
    passedEveryValidation();
    showDiv();
}