//**** Created variables to require fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

//**** Created variables with objects for each question
let question1 = {
    name: "project_title",
    type: "input",
    message: "What is your project title?",
}
let question2 = {
    name: "project_description",
    type: "input",
    message: "What is your project description?",
}
let question3 = {
    name: "installation_instructions",
    type: "input",
    message: "How do you install your project?",
}
let question4 = {
    name: "usage_information",
    type: "input",
    message: "What does the user need to know about using the repo?",
}
let question5 = {
    name: "contribution_guidelines",
    type: "input",
    message: "Guidelines if you want to contribute to the project",
}
let question6 = {
    name: "test_instructions",
    type: "input",
    message: "Instructions on how to test project",
}
let question7 = {
    name: "license_choice",
    type: "list",
    message: "Choose which License Type you want:",
    choices: ['MIT', 'GPL', 'ASL', 'WRX']
}
let question8 = {
    name: "github_name",
    type: "input",
    message: "Enter your github username:",
}
let question9 = {
    name: "email_address",
    type: "input",
    message: "Enter your email:",
}

// Created questions variable that holds each question object
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9];

// **** FUNCTION - Created function that prompts the user each question from question objects
function askQuestions() {
    inquirer.prompt(questions)
        //answers equals all results from prompted questions
        .then((answers) => {
            fs.writeFile('README.md', markdown(answers), (err) => { 
                if(err) throw err;
                console.log('README file has been created!');
            })
            // created variables that hold the answers from each question based off the name: field in each prompt "question 1-9"
            // let answer1 = answers.project_title;
            // let answer2 = answers.project_description;
            // let answer3 = answers.installation_instructions;
            // let answer4 = answers.usage_information;
            // let answer5 = answers.contribution_guidelines;
            // let answer6 = answers.test_instructions;
            // let answer7 = answers.license_choice;
            // let answer8 = answers.github_name;
            // let answer9 = answers.email_address;

            // Calling makeReadme function that passes through each answer variable
            // makeReadme(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9);
        })
}

// **** FUNCTION - passes through answers through placeholder parameters and uses template string  `` to create readme titles with answers below.

// function makeReadme(ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9) {
//     let fileStructure = `
//     # ${ans1}

//     [Project Description](#Project Description)
    
//     ## Project Description
//     ${ans2}

//     ## Installation Instructions
//     ${ans3}

//     ## Usage Information
//     ${ans4}

//     ## Contribution Guidelines
//     ${ans5}

//     ## Test Instructions
//     ${ans6}

//     ## License Type
//     ${ans7}
    
//     ## Questions?s
    
//     github: https://github.com/${ans8}
//     email: ${ans9}

//     `

//     // Final step README file is written using fs. all data inputed in 
//     fs.writeFile(`${__dirname}/README.md`, fileStructure, err => { console.log(err) });
// }


askQuestions();