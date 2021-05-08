var validations = document.createElement('ul');

var btn = document.querySelector('#run-validations');
btn.addEventListener('click', runValidations);

function runValidations() {
    formExists();
    numberOfFields(4);
    requiredFields();
    labels();
    linkToOtherPage('Login','login.html');
    checkButton('reset', 'Reset');
    checkButton('submit', 'Sign up');
    passedEveryValidation();

    btn.classList.add('hidden');
    btn.removeEventListener('click', runValidations);

    var results = document.getElementById('validation-results');

    results.appendChild(validations);
    results.classList.remove('hidden');
}