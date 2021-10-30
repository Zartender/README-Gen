// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
    //  Usage, License, Contributing, Tests, and Questions
    {
        // Added
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        // Added
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        // Added
        type: 'confirm',
        name: 'contents',
        message: 'Create a table of contents?',
    },
    {
        // Added
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        default: "npm install"
    },
    {
        // Added
        type: 'input',
        name: 'usage',
        message: 'What installation is necessary for your program?',
        default: "git clone repo"
    },
    {
        // Added
        type: 'list',
        name: 'license',
        message: 'Does your project require a license?',
        choices: ["APM", "Bower", "Conda", "Dub", "Github", "MIT", "NPM"]
    },
    {
        // Added
        type: 'input',
        name: 'contribution',
        message: 'Please list the contributors (collaborators) to your project.',
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Does your program require any testing?',
    },
    {
        type: 'input',
        name: 'githubId',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), 'utf8', (error) => {
        if (error) {
            console.log(error);
        }
        console.log("Successfully c file!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        //
        writeToFile('README.MD', answers); 
    })
    .catch((err) => {
        console.error(err);
    })
}

// Function call to initialize app
init();
