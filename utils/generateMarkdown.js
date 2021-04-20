// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.contributor}

## License

![badge](https://img.shields.io/badge/license-${data.license}-blue)

## Tests

(If you have run any tests for your peoject, list them here)

## Questions

If you have any questions about the project, or wish to see any other projects, refer to github: ${data.gitHub}

If you have any further questions feel free to send an email to: ${data.email}

`;
}

module.exports = generateMarkdown;
