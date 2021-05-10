const Page = require('./page');

class RegisterPage extends Page {

    get inputName () { return $('#name') }
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get inputRptPassword () { return $('#repeat-password') }
    get submitBtn () { return $('input[type="submit"]') }

    get registerResult () { return $('#register-result') }

    get nameErrorMsg () { return $('.error-message*=name') }
    get emailErrorMsg () { return $('.error-message*=email') }
    get passwordErrorMsg () { return $('.error-message*=password must contain') }
    get rptPasswordErrorMsg () { return $('.error-message=The passwords don\'t match') }

    open () {
        super.open('register.html');
    }

    register (name, email, password, rptPassword) {
        this.inputName.setValue(name);
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.inputRptPassword.setValue(rptPassword);
        this.submit();
    }

    submit () {
        this.submitBtn.click();
    }

    inputValue (field, value) {
        this[field].setValue(value);
        browser.keys('Tab');
    }

}

module.exports = new RegisterPage();