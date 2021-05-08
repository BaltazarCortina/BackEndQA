var fullName = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var repeatPassword = document.querySelector('#repeat-password');
var form = document.querySelector('form');

fullName.addEventListener('blur', validName);
email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
password.addEventListener('blur', validPasswordChange);
repeatPassword.addEventListener('blur', validRepeatPassword);
form.addEventListener('submit', handleRegister);


function handleRegister(e) {
    e.preventDefault();
    if (submitBtn.classList.contains('disabled')) {
        alert('One or more fields are not correct!')
    } else {
        let formData = getFormData();
        fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => handleError(res))
        .then(res => res.json())
        .then(res => {
            console.log(res.result);
            registerSuccessfull();
        })
        .catch(error => {
            console.log(error + '\nUser already exists');
            registerFailed();
        })
    }
}

function registerSuccessfull() {
    insertResultMessage('register-result', 'register-successfull', 'Successfully created user!');
}

function registerFailed() {
    insertResultMessage('register-result', 'register-failed', 'The user already exists!');
}