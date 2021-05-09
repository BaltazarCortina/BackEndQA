const RegisterPage = require('../pageobjects/register.page');

describe('Testing Register section:', () => {
    it ('Should allow registration of a new account with valid inputs', () => {
        RegisterPage.open();
        RegisterPage.register('Valid User','user@email.com', 'user1234');
        expect(RegisterPage.registerResult).toHaveText('Successfully created user!');
    })
    
    it ('Should deny registration of an existing account', () => {
        RegisterPage.open();
        RegisterPage.register('Admin User','admin@email.com', 'admin123');
        expect(RegisterPage.registerResult).toHaveText('The user already exists!');
    })

    it ('Should throw error with invalid name', () => {
        RegisterPage.open();
        RegisterPage.inputValue('inputName', 'Invalidname');
        expect(RegisterPage.nameErrorMsg).toExist();
    })
    
    it ('Should throw error with invalid email', () => {
        RegisterPage.open();
        RegisterPage.inputValue('inputEmail', 'invalidemail.com');
        expect(RegisterPage.emailErrorMsg).toExist();
    })

    it ('Should throw error with invalid password', () => {
        RegisterPage.open();
        RegisterPage.inputValue('inputPassword', 'invalidpassword');
        expect(RegisterPage.passwordErrorMsg).toExist();
    })

    it ('Should throw error with invalid password', () => {
        RegisterPage.open();
        RegisterPage.inputValue('inputPassword', 'password1');
        RegisterPage.inputValue('inputRptPassword', 'password2');
        expect(RegisterPage.rptPasswordErrorMsg).toExist();
    })

    // browser.pause(2000);

})