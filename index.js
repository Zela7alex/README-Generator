const fs = require('fs');
const inquirer = require('inquirer');




function makeReadme(ans1, ans2, ans3, ans4, ans5, ans6) {
    let fileStructure = `
    #${ans1}
    
    ##Project Description
    ${ans2}

    ##Installation Instructions
    ${ans3}

    ##Usage Information
    ${ans4}

    ##Contribution Guidelines
    ${ans5}

    ##Test Instructions
    ${ans6}


    `


    fs.writeFile(`${__dirname}/README.md`, fileStructure, err => { console.log(err) });
}



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



let questions = [question1, question2, question3, question4, question5, question6];


function askQuestions() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            let answer1 = answers.project_title;
            let answer2 = answers.project_description;
            let answer3 = answers.installation_instructions;
            let answer4 = answers.usage_information;
            let answer5 = answers.contribution_guidelines;
            let answer6 = answers.test_instructions;


            makeReadme(answer1, answer2, answer3, answer4, answer5, answer6);
        })
}


askQuestions();