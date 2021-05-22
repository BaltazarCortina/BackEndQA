# 14th Weekly Problem

***

Automated tests for the forms created for the 9th, 10th and 11th weekly problems.

After running the tests, the server should be restarted before running them again.

**To run all the tests:**
1. Open a terminal in the project's folder
2. Enter the command 'npm run start' to start the server
3. Open a new terminal in the project's folder
4. Enter the command: 'npm run test'


**To run the tests on the Login section:**
1. Open a terminal in the project's folder
2. Enter the command 'npm run start' to start the server
3. Open a new terminal in the project's folder
4. Enter the command: 'npm run test-login'


**To run the tests on the Register section:**
1. Open a terminal in the project's folder
2. Enter the command 'npm run start' to start the server
3. Open a new terminal in the project's folder
4. Enter the command: 'npm run test-register'


**To run the test to register a new account and log into it:**

*The purpose of this test is to validate that you can log into an account that was just registered.*

*The test is in a separate file to be able to run it independently from the rest of the Register and Login tests,*
*because there's not a database to store the user's information.*
1. Open a terminal in the project's folder
2. Enter the command 'npm run start' to start the server
3. Open a new terminal in the project's folder
4. Enter the command: 'npm run test-reg-log'