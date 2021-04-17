// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What do you want to name your project?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
    default: "No project description available",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    choices: [
      { name: "Apache 2.0", value: "apache%202.0" },
      { name: "MIT", value: "MIT" },
    ],
  },
  // {
  //   type: "input",
  //   name: "name",
  //   message: "What is your name?",
  // },
  // {
  //   type: "input",
  //   name: "name",
  //   message: "What is your name?",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) =>
      writeToFile("README.md", generateMarkdown({ ...answers }))
    );
}

// Function call to initialize app
init();
