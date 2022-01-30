// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];

function init() {
    return inquirer
        .prompt([
            {
               type: 'input',
               name: 'title',
               message: 'What is the title of your project? (Required):',
               validate: titleInput => {
                   if (titleInput) {
                       return true;
                   } else {
                       console.log('Please enter a title!')
                       return false;
                   }
               }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your project. (Required):',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project!')
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'tableOfContents',
                message: 'What would you like to include for a table of contents? (Check all that you want to include.):',
                choices: ['Installation', 'Usage', 'License', 'Credits', 'Tests', 'Questions']
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please enter instructions on how to install your application.'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please enter instructions on how to use your application.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select what type of license you would like to use.',
                choices: ['No license', 'The Unlicense', 'Mozilla Public License 2.0', 'GNU AGPLv3']
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'How do you make contributions to your application?'
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please enter test instructions for your application.'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub user name.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please provide your email address.'
            }
        ]);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
