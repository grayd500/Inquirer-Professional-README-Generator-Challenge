const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'Please reference your credits here.\n(Separate multiple credits with a comma)\n[Hit Enter to skip]',
      default: '',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project. [Hit Enter to skip]',
      default: '',
      choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'Badges',
      message: 'List any relevant badges?\n(Separate multiple badges with a comma)\n[Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'Features',
      message: 'List any notable features about your project? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can people contribute to this project? [Hit Enter to skip]',
      default: '',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can tests be run for this project? [Hit Enter to skip]',
      default: '',
    }
  ];  

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      console.log(answers);
      fs.writeFile('README.md', generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('README generated!');
      });
    });
  }
  
  // Function call to initialize app
  init();
