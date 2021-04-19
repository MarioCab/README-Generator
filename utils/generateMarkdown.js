// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

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

  ## Questions

  If you have any questions about the project, or wish to see any other projects, refer to github:

  ${data.gitHub}

  If you have any further questions feel free to send an email:

${data.email}

`;
}

module.exports = generateMarkdown;
