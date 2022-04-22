// TODO: Include packages needed for this application
const fs = require('fs');
const inq = require('inquirer');
const genMD = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const licenseNames = [];

genMD.licenses.forEach(license => licenseNames.push(license.name));

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'How do you install the package?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How do you use the package?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Under which license will this project be?',
        name: 'license',
        choices: licenseNames
    },
    {
        type: 'input',
        message: 'Who are the contributers for the project?',
        name: 'contributers'
    },
    {
        type: 'input',
        message: 'How do you test the application?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github username, so people will be directed there to ask questions?',
        name: 'github'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeText = genMD.generateMarkdown(data);
    fs.writeFile(fileName, readmeText, (err) =>
    err ? new Error(err) : console.log('Readme created'))
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
        .then(response => writeToFile('README.md', response))
        .catch(err => console.error(err));
}

// Function call to initialize app
init();