const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");
const Employee = require("./lib/Employee");
const EditorPrompt = require("inquirer/lib/prompts/editor");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

var choiceprompt={
    type:'list',
    name: 'choice',
    message:'choose a team member type',
    choices:[Employee,Engineer,Intern,Manager]

    
}
function main(){
    console.log('Build A Squad')
    Prompt()
    
}

function Prompt(){
    inquirer.prompt(choiceprompt).then((answers)=>{
        var squadM=answers.choice

        if(squadM==='Engineer'){
            console.log('you have chosen engineer');
            eprompt()}else(squadM==='Intern');{
                console.log('You Have Chosen Intern')
                iprompt()}elseif(squadM==='Manager');{
                    console.log('Youhave chosen Manager')
                    mprompt()
                }elseif(squadM==='Employee');{
                    console.log("you hvae chosen Employee")
                    gprompt()
                }
               

            })}

       
        
        
    
// manager prompt()
function mprompt(){
    return inquirer.prompt([
        {type:'input',
        name:'name',
        message:"what is your name"},{
            type:'input',
            message:'What is your ID number?',
            name:"id",},{
                type:'input',
                message:'what is your Email address?'
                ,name:'email'
            },{
                type:'input',
                message:'what it you role',
                name:'role',
            },{type:"input",
                message:"Office Number?",
                name:'officeNumber'}
    ],)
            };

  //intern prompt 
  function iprompt(){
    return inquirer.prompt([
        {type:'input',
        name:'name',
        message:"what is your name"},{
            type:'input',
            message:'What is your ID number?',
            name:"id",},{
                type:'input',
                message:'what is your Email address?'
                ,name:'email'
            },{
                type:'input',
                message:'what it you role',
                name:'role',
            },{type:"input",
                message:"School?",
                name:'school'}
    ],)
            };
      
//engineer prompt
    function eprompt(){
        return inquirer.prompt([
            {type:'input',
            name:'name',
            message:"what is your name"},{
                type:'input',
                message:'What is your ID number?',
                name:"id",},{
                    type:'input',
                    message:'what is your Email address?'
                    ,name:'email'
                },{
                    type:'input',
                    message:'what it you role',
                    name:'role',
                },{type:"input",
                    message:"Github?",
                    name:'github'}
        ],)
                };

//general debate 
function gprompt(){
    return inquirer.prompt([
        {type:'input',
        name:'name',
        message:"what is your name"},{
            type:'input',
            message:'What is your ID number?',
            name:"id",},{
                type:'input',
                message:'what is your Email address?'
                ,name:'email'
            },{
                type:'input',
                message:'what it you role',
                name:'role',
            },
    ],)
            };

    
main()


               


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
