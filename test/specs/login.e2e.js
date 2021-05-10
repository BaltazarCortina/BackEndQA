const LoginPage = require('../pageobjects/login.page');

describe('Testing Login section:', () => {
    it ('Should allow access with correct credentials', () => {
        LoginPage.open();
        LoginPage.login('admin@email.com', 'admin123');

        expect(LoginPage.successfullLogin).toExist();
    })

    it ('Should deny access with wrong credentials', () => {
        LoginPage.open();
        LoginPage.login('user@email.com', 'user1234');

        expect(LoginPage.loginResult).toHaveText('The user does not exist!');
    })

    describe('Should throw error with invalid input and hide it when correcting', () => {
        it ('Invalid email', () => {
            LoginPage.open();
            LoginPage.inputValue('inputEmail', 'invalidemail.com');
    
            expect(LoginPage.emailErrorMsg).toExist();
    
            LoginPage.inputEmail.click();
    
            expect(LoginPage.emailErrorMsg).not.toExist();
        })
    
        it ('Invalid password', () => {
            LoginPage.open();
            LoginPage.inputValue('inputPassword', 'invalidpassword');
    
            expect(LoginPage.passwordErrorMsg).toExist();
    
            LoginPage.inputPassword.click();
    
            expect(LoginPage.passwordErrorMsg).not.toExist();
        })
    })

    describe('Should throw an alert if any of the fields is not valid', () => {
        it ('Invalid email', () => {
            LoginPage.open();
            LoginPage.login('user@email.1com', 'user1234');
            LoginPage.submitBtn.click();
            
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })
        
        it ('Invalid password', () => {
            LoginPage.open();
            LoginPage.login('user@email.com', 'user');
            LoginPage.submitBtn.click();
    
            expect(browser.getAlertText()).toEqual('One or more fields are not correct!');
        })
    })

    // browser.pause(2000);

})