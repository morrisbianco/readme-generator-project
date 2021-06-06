// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const questionsJS = require('./questions.js');
const writeJS = require('./write.js');

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questionsJS.questions)
        .then((response) => {
            fs.writeFile('README.md', writeJS.writeFile(response), (err) => err ? console.error(err) : console.log('Commit logged!'));
        })
}

// Function call to initialize app
init();
