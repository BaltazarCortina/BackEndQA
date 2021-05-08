var submitBtn = document.querySelector('input[type=submit]');

function errorFound(eTarget, errorMessage) {
    eTarget.classList.add('error');

    var message = document.createElement('div');
    message.innerText = errorMessage;
    eTarget.parentElement.appendChild(message);
    message.classList.add('error-message');

    submitBtn.classList.add('disabled');

    eTarget.addEventListener('focus', correcting);
}

function correcting (e) {
    e.target.classList.remove('error');
    e.target.parentElement.querySelector('.error-message').remove();
    e.target.removeEventListener('focus', correcting);
}

function validateForm() {
    if (document.querySelectorAll('.error').length === 0) {
        submitBtn.classList.remove('disabled');
    }
}

function validEmail(e) {
    var validFormat = /^([\w.\-+/!%]{1,64}|"[\w. ]{1,62}")@[0-9a-zA-Z\-]+(\.[a-zA-Z]+)*$/;          //Based on wikipedia's examples of valid and invalid email addresses
    var errorMessage = 'Enter a correct email address';
    if (!validFormat.test(e.target.value)) {
        errorFound(e.target, errorMessage);
    } else {
        validateForm();
    }
}

function validName(e) {
    var validFormat = /^([A-Za-z]+( [A-Za-z]+)+)$/;
    var errorMessage = 'Enter your full name';
    if (!validFormat.test(e.target.value) || e.target.value.length < 6) {
        errorFound(e.target, errorMessage);
    } else {
        validateForm();
    }
}

function validPassword(e) {
    var validFormat = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;                    //At least 8 digits (only letters and numbers). At least 1 number and 1 upper or lowercase letter
    var errorMessage = 'The password must contain at least 8 characters, including a number and a letter';
    if (!validFormat.test(e.target.value)) {
        errorFound(e.target, errorMessage);
    } else {
        validateForm();
    }
}

function validPasswordChange (e) {
    var password = document.querySelector('#repeat-password');
    var errorMessage = 'The passwords don\'t match';
    if (e.target.value != password.value) {
        if (!password.classList.contains('error')) {
            errorFound(password, errorMessage);
        }
    } else if (password.classList.contains('error')) {
        password.classList.remove('error');
        password.parentElement.querySelector('.error-message').remove();
        password.removeEventListener('focus', correcting);
    }
    validateForm();
}

function validRepeatPassword(e) {
    var password = document.querySelector('#password').value;
    var errorMessage = 'The passwords don\'t match';
    if (e.target.value != password) {
        errorFound(e.target, errorMessage);
    } else {
        validateForm();
    }
}