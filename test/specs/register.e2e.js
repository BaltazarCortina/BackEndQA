const RegisterPage = require('../pageobjects/register.page');

describe('Testing Register section:', () => {
    it ('Should allow registration of a new account with valid inputs', () => {
        RegisterPage.open();
        RegisterPage.register('Valid User','user@email.com', 'user1234', 'user1234');

        expect(RegisterPage.registerResult).toHaveText('Successfully created user!');
    })
    
    it ('Should deny registration of an existing account', () => {
        RegisterPage.open();
        RegisterPage.register('Admin User','admin@email.com', 'admin123', 'admin123');

        expect(RegisterPage.registerResult).toHaveText('The user already exists!');
    })

    describe('Should throw error with invalid input and hide it when correcting', () => {
        it ('Invalid name', () => {
            RegisterPage.open();
            RegisterPage.inputValue('inputName', 'Invalidname');
    
            expect(RegisterPage.nameErrorMsg).toExist();
    
            RegisterPage.inputName.click();
    
            expect(RegisterPage.nameErrorMsg).not.toExist();
        })
        
        it ('Invalid email', () => {
            RegisterPage.open();
            RegisterPage.inputValue('inputEmail', 'invalidemail.com');
    
            expect(RegisterPage.emailErrorMsg).toExist();
    
            RegisterPage.inputEmail.click();
    
            expect(RegisterPage.emailErrorMsg).not.toExist();
        })
    
        it ('Invalid password', () => {
            RegisterPage.open();
            RegisterPage.inputValue('inputPassword', 'invalidpassword');
    
            expect(RegisterPage.passwordErrorMsg).toExist();
    
            RegisterPage.inputPassword.click();
    
            expect(RegisterPage.passwordErrorMsg).not.toExist();
        })
    
        it ('Invalid repeat password', () => {
            RegisterPage.open();
            RegisterPage.inputValue('inputPassword', 'password1');
            RegisterPage.inputValue('inputRptPassword', 'password2');
    
            expect(RegisterPage.rptPasswordErrorMsg).toExist();
    
            RegisterPage.inputRptPassword.click();
    
            expect(RegisterPage.rptPasswordErrorMsg).not.toExist();
        })
    })

    describe('Should throw an alert if any of the fields is not valid', () => {
        it ('Invalid name', () => {
            RegisterPage.open();
            RegisterPage.register('Invaliduser' ,'otheruser@email.com', 'user1234', 'user1234');
            RegisterPage.submitBtn.click();
            
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })

        it ('Invalid email', () => {
            RegisterPage.open();
            RegisterPage.register('Valid User' ,'otheruser@email.1com', 'user1234', 'user1234');
            RegisterPage.submitBtn.click();
            
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })
        
        it ('Invalid password', () => {
            RegisterPage.open();
            RegisterPage.register('Valid User' ,'otheruser@email.com', 'user', 'user');
            RegisterPage.submitBtn.click();
    
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })
        
        it ('Invalid repeat password', () => {
            RegisterPage.open();
            RegisterPage.register('Valid User' ,'otheruser@email.com', 'user1234', 'user4321');
            RegisterPage.submitBtn.click();
    
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })
    })

    // browser.pause(2000);

})