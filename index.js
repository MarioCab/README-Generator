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
  {
    type: "input",
    name: "installation",
    message:
      "What do users need to do in order to properly install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the uses for your application?",
  },
  {
    type: "input",
    name: "contributor",
    message: "Who contributed to this project?",
  },
  // {
  //   type: "confirm",
  //   name: "confirmContributor",
  //   message: "Is there anyone else who contributed to the application?",
  //   default: "(y/N)",
  // },
  {
    type: "input",
    name: "gitHub",
    message: "Type your github username",
  },
  {
    type: "input",
    name: "email",
    message: "Type your email",
  },
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
