const { licenseSetup } = require("./switch.js")

// TODO: Create a function to write README file
const writeFile = (response) => `# ${response.title}
${licenseSetup(response.license)}
## Table of Contents
            
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

### Description
${response.description}
### Installation
${response.installation}
### Usage
${response.usage}
### License
${response.license}
### Contributing
${response.contribution}
### Tests
${response.test}
### Questions
${response.github}: https://github.com/${response.github}

${response.email}: Please contact me through this E-mail address with any further questions that you may have.
            `

module.exports = {
    writeFile
  }