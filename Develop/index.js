// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

const userQuestions = [
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'questions',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions for your project:',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Where do we run this repo?',
    },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD2' , 'Boost1.0', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who has contributed to this repository?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test instructions for your project:',
    default: 'npm test'
  },
  ];

  // TODO: Create a function to write README file
function writeReadMe(fileName, data) {
   return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions)
        .then((data) => {
		writeToFile('./dist/README.md', generateMarkdown(data))
	})
}
// Function call to initialize app
init();
