// GIVEN - application that accepts user input
// WHEN - prompted for information about my application repository
// THEN - README.md is generated with title and sections Description, Table of Contents, Installation, Usage, 
// License, Contributing, Tests, and Questions
// WHEN - enter project title THEN displayed as the title of the README
// WHEN - enter description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN - information added to README called Description,Installation, Usage, Contributing, and Tests
// WHEN - choose a license from a list of options
// THEN - badge for that license added near the top of README and notice is added to README entitled License 
// that explains which license the application is covered under
// WHEN - enter my GitHub username THEN added to README entitled Questions, with a link to my GitHub profile
// WHEN - enter my email address THEN added to README entitled Questions, with instructions to reach me with additional questions
// WHEN - click on the links in the Table of Contents THEN taken to the corresponding section of the README



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
    {
        type: "input",
        message: "What would you like the project title to be?",
        name: "title"
    },
    {
        type: "input",
        message: "What would you like the description to be?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "instructions"
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"
    },
    {
        type: "checkbox",
        message: "What license would you like to use?",
        name: "license",
        choices: [
            { name: 'MIT', value: 'MIT' },
            { name: 'Apache 2.0 License', value: 'Apache 2.0 License' },
            { name: 'GNU GPL v3', value: 'GNU GPL v3' },
            { name: 'Eclipse Public License 1.0', value: 'Eclipse Public License 1.0' }
          ],
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your E-mail address?",
        name: "email"
    }
        ])
        .then()
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
