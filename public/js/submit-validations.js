function handleError(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function insertResultMessage(resultId, resultClass, text) {
    let message = document.querySelector('#' + resultId);
    if (message === null) {
        form.insertAdjacentHTML('afterbegin', '<div id="' + resultId + '" class="' + resultClass + '">' + text + '</div>');
    } else {
        message.innerHTML = text;
        message.className = resultClass;
    }
}

function getFormData () {
    var fields = document.querySelectorAll('.field');
    showDiv();
    validations.innerHTML = '<li class="underline input-data">Input data:</li>';
    let formData = new Object();
    for (let i = 0; i < fields.length; i++) {
        var text = fields[i].name.toUpperCase() + ': ' + fields[i].value;
        appendListElement(text, 'input-data');
        if (fields[i].name != 'repeat-password') {
            formData[fields[i].name] = fields[i].value;
        }
    }
    return formData;
}