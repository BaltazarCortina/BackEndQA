const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#password') }
    get submitBtn () { return $('input[type="submit"]') }
    
    get successfullLogin () { return $('div.login-successfull') }
    get loginResult () { return $('#login-result') }
    get emailErrorMsg () { return $('.error-message*=email') }
    get passwordErrorMsg () { return $('.error-message*=password') }

    open () {
        super.open('login.html');
    }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
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

module.exports = new LoginPage();
