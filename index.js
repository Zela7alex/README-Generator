const fs = require('fs');
const inquirer = require('inquirer');




function makeReadme(ans1, ans2) {
    let fileStructure = `
    #${ans1}
    
    ##Project Description
    ${ans2}

    

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


let questions = [question1, question2];


function askQuestion() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            let answer1 = answers.project_title;
            let answer2 = answers.project_description;


            makeReadme(answer1, answer2)
        })
}


askQuestion();