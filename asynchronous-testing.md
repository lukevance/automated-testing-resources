# Asynchronous Testing Exercises

## Environment Setup

Make a new folder name `asynchronous-testing-exercises` in the root folder of this repository.

Change directories to your new folder.

Run `npm init`

Install the following packages

```
npm install --save-dev mocha
npm install --save-dev chai
```

Create a folder named `tests`, this is where you testing files will live.

Inside the `packages.json` file, make sure that the `test` property looks like this:

```
  "scripts": {
    "test": "mocha"
  }
```

this allows you to run the test suite with the command `npm test`

For each of the following exercises, you'll need two files. One where the functionality will be located, and the other where the test are located.

The file with the functionality should be named after the exercise. But the test file, should be located in the test folder, and be named in the following pattern `exercise1.test.js`.

Since Exercise 2 already has its own folder setup, you'll only put Exercise 1 into the `asynchronous-testing-exercises` folder.

## Exercise 1

Create an object that provides a Logging service. It has methods that write to a file, preappending the date and the type of information. This object needs to have the following functionality


- The Logger object needs to have a function that initializes the logger, it takes a parameter that is the name of the log file. If the file does not exist, create it. If the file exists, overwrite it.
- If a `LOG`, `INFO`, `WARN`, `ERROR`, or `DEBUG` message is attempted to be logged without the Logger object, it should return false.
- Create function to log logging information, with the text `LOG` preappended to the information being logged.
- Create function to log information, with the text `INFO` preappended to the information being logged.
- Create function to log warnings, with the text `WARN` preappended to the information being logged.
-  Create function to log errors, with the text `ERROR` preappended to the information being logged.
-  Create function to log debugging messages, with the text `DEBUG` preappended to the information being logged
- If any of the file actions is unsuccessfull, return `false`. If the action was successful, return `true`.



## Exercise 2

In this repository there is a folder named `database-test`. This folder contains a basic skeleton to test a database using mocha. To set up the project, run the following commands:

```
npm init
createdb database-test

```

To run the test: `npm test`

In the `user-database.js` add the following functions to the object:

- Get all users from database,
- Get one user with a given id,
- Update 1 user with a given id, and updated values,
- Delete 1 user with a given id.



 





