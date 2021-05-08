function appendListElement(text, elemClass = 'failed') {
    var listElement = document.createElement('li');
    var elementText = document.createTextNode(text);
    listElement.appendChild(elementText);
    listElement.classList.add(elemClass);
    validations.appendChild(listElement);
}

function formExists() {
    var form = document.getElementsByTagName('form');
    if (form.length == 1) {
        return;
    } if (form.length == 0) {
        var text = 'There is no form element in the DOM.';
    } else {
        var text = 'There is more than one form elements in the DOM.';
    }
    appendListElement(text);
}

function numberOfFields(number) {
    var fields = document.getElementsByClassName('field');
    if (fields.length === number) {
        return;
    } if (fields.length > number) {
        var text = 'There are more fields than there should be.';
    } else {
        var text = 'There are less fields than there should be.';
    }
    appendListElement(text);
}

function requiredFields() {
    var fields = document.getElementsByClassName('field');
    for (let index = 0; index < fields.length; index++) {
        if (!fields[index].hasAttribute('required')) {
            var text = 'One or more fields are not required.';
            appendListElement(text);
            return;
        }
    }
}

function labels() {
    var fields = document.getElementsByClassName('field');
    var labels = document.getElementsByTagName('label');
    var text = 'One or more fields does not have an associated label.';
    if (fields.length != labels.length) {
        appendListElement(text);
    } else {
        for (let index = 0; index < fields.length; index++) {
            if (fields[index].getAttribute('id') != labels[index].getAttribute('for')) {
                appendListElement(text);
                return;
            }
        }
    }
}

function linkToOtherPage(page, link) {
    var links = document.querySelectorAll('#navegation a');
    for (let index = 0; index < links.length; index++) {
        if (links[index].getAttribute('href') === link) {
            return;
        }
    }
    var text = 'There is not a link to  ' + page + '.';
    appendListElement(text);
    return;
}

function dontHaveAnAccount(register) {
    try {
        var link = document.querySelector('#no-account a');
        if (link.getAttribute('href') != register) {
            var text = 'The "Don\'t have an account?" link is not working.';
            appendListElement(text);
        }
    }
    catch (e) {
        var text = 'The "Don\'t have an account?" link doesn\'t exist.';
        appendListElement(text);
    }
}

function checkButton(type, name) {
    try {
        button = document.querySelector('.form-button[type=' + type + ']');
        if (button.getAttribute('value') != name) {
            var text = 'The name of the ' + name + ' button is wrong.';
            appendListElement(text);
        }
    }
    catch (e) {
        var text = 'There is not a ' + name + ' button.';
        appendListElement(text);
    }
}

function passedEveryValidation() {
    if (validations.getElementsByTagName('li').length === 0) {
        var text = "Every validation has passed!";
        appendListElement(text, 'passed');
    }
    else {
        validations.insertAdjacentHTML('afterbegin', '<li class="underline failed">Validations results:</li>');
    }
}

function showDiv() {
    btn.classList.add('hidden');
    btn.removeEventListener('click', runValidations);

    var results = document.getElementById('validation-results');

    results.appendChild(validations);
    results.classList.remove('hidden');
}   