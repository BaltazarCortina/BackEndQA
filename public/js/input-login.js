var email = document.querySelector('#email');
var password = document.querySelector('#password');
var form = document.querySelector('form');

email.addEventListener('blur', validEmail);
password.addEventListener('blur', validPassword);
form.addEventListener('submit', handleLogin);


function handleLogin(e) {
    e.preventDefault();
    if (submitBtn.classList.contains('disabled')) {
        alert('One or more fields are not correct!')
    } else {
        let formData = getFormData();
        fetch('http://localhost:4000/login', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => handleError(res))
        .then(res => res.json())
        .then(res => {
            console.log(res.result);
            loginSuccessfull(res.name);
        })
        .catch(error => {
            console.log(error + '\nUser does not exist or the password is not valid');
            loginFailed(error.message);
        })
    }
}

function loginSuccessfull(name) {
    let mainSection = document.querySelector('#main-section');
    let firstName = name.split(' ')[0];
    let message = document.createElement('div');
    let messageText = document.createTextNode('Welcome ' + firstName);
    message.appendChild(messageText);
    message.classList.add('login-successfull');
    mainSection.appendChild(message);
    form.classList.add('hidden');
}

function loginFailed(error) {
    if (error === '401') {
        insertResultMessage('login-result', 'login-failed', 'The password is incorrect!');
    } else if (error === '404') {
        insertResultMessage('login-result', 'login-failed', 'The user does not exist!');
    } else {
        insertResultMessage('login-result', 'login-failed', 'Something went wrong!');
    }
}