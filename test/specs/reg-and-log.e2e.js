const RegisterPage = require('../pageobjects/register.page');
const LoginPage = require('../pageobjects/login.page');

/*
 * The purpose of this test is to validate that you can log into an account that was just registered.
 * The test is in a separate file to be able to run it independently from the rest of the Register and Login tests, 
 * because there's not a database to store the user's information.
*/

describe('Testing registering a new account and logging into it:', () => {
    it ('Should allow registration of a new account with valid inputs', () => {
        RegisterPage.open();
        RegisterPage.register('New User','newuser@email.com', 'user1234', 'user1234');

        expect(RegisterPage.registerResult).toHaveText('Successfully created user!');
    })
    
    it ('Should allow access to the user just created', () => {
        LoginPage.open();
        LoginPage.login('newuser@email.com', 'user1234');

        expect(LoginPage.successfullLogin).toHaveText('Welcome New');
    })

    it ('Should deny access to the user just created with wrong credentials', () => {
        LoginPage.open();
        LoginPage.login('newuser@email.com', 'user4321');

        expect(LoginPage.loginResult).toHaveText('The password is incorrect!');
    })
})