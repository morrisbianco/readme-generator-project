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
        name: "installation"
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
        type: "rawlist",
        message: "What license would you like to use?",
        name: "license",
        choices: ['MIT', 'Apache 2.0 License', 'GNU GPL v3', 'Eclipse Public License 1.0'],
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

module.exports = {
    questions,
  };