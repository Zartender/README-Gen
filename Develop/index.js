// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
    //  Usage, License, Contributing, Tests, and Questions
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter your project description.',
    },
    {
        type: 'confirm',
        name: 'contents',
        message: 'Create a table of contents?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What installation is necessary for your program?',
        default: "npm install"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What installation is necessary for your program?',
        default: "git clone repo"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does your project require a license?',
        choices: ["MIT", "None"]
    },
    {
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
    fs.writeFile(fileName, generateMarkdown(data), 'utf8', (error, data) => {
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
    }); 
}

// Function call to initialize app
init();
