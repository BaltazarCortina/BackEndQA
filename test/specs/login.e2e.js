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

    it ('Should throw error with invalid email', () => {
        LoginPage.open();
        LoginPage.inputValue('inputEmail', 'invalidemail.com');
        expect(LoginPage.emailErrorMsg).toExist();
    })

    it ('Should throw error with invalid password', () => {
        LoginPage.open();
        LoginPage.inputValue('inputPassword', 'invalidpassword');
        expect(LoginPage.passwordErrorMsg).toExist();
    })

    // browser.pause(2000);


    /*
    it('Searching "Wkipedia" on Google', () => {
        let input = $('input[name=q]');
        input.setValue('Wikipedia');
        browser.keys('Enter');
    });

    it('Clicking on the result with the "Wikipedia" text', () => {
        let link = $('h3=Wikipedia');
        link.click();
    });

    it('Checking the web\'s url', () => {
        expect(browser.getUrl()).toMatch('https://es.wikipedia.org/wiki/Wikipedia:Portada');
    });
    */
})