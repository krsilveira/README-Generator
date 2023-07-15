// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Where is the description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the instructions for installation?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
  console.log(answers)
  console.log(answers.name)
})

}

// Function call to initialize app
init();
