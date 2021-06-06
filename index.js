// GIVEN - application that accepts user input DONE
// WHEN - prompted for information about my application repository DONE
// THEN - README.md is generated with title and sections Description, Table of Contents, Installation, Usage, DONE
// License, Contributing, Tests, and Questions DONE
// WHEN - enter project title DONE THEN displayed as the title of the README DONE
// WHEN - enter description, installation instructions, usage information, contribution guidelines, and test instructions DONE
// ####1 THEN - information added to README called Description,Installation, Usage, Contributing, and Tests
// WHEN - choose a license from a list of options DONE
// ####2 THEN - badge for that license added near the top of README and notice is added to README entitled License 
// that explains which license the application is covered under
// WHEN - enter my GitHub username DONE ####3 THEN added to README entitled Questions, with a link to my GitHub profile
// WHEN - enter my email address DONE ####4 THEN added to README entitled Questions, with instructions to reach me with additional questions
// WHEN - click on the links in the Table of Contents DONE THEN taken to the corresponding section of the README DONE



// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
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
];

const readmeSetup = `## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

### Description
### Installation
### Usage
### License
### Contributing
### Tests
### Questions
`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFile('README.md', readmeSetup, (err) => err ? console.error(err) : console.log('Commit logged!'));
        fs.writeFile('README.md', `# ${response.title}`, (err) => err ? console.error(err) : console.log('Commit logged!'));

    });
}
// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
