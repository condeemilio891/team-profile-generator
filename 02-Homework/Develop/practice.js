//const writeFileAsync = util.promisify(fs.writeFile);

//const util = require("util");
//variables for inquirer
const fs = require("fs");
    const inquirer=require('inquirer');


//function to construct  readme 
    var profile= new Promise(function(resolve,reject){
      resolve(inquirer.prompt([
      //title
        {type:"input",
        name:"title",
        message:"What is the title of the project"},
      //github name
        {type:"input",
        name:"git",
        message:"What are the github account names of the contributors?"},
      //emails
      {type:"input",
        name:"email",
        message:"what are the Email addresses of all the contributers?"},
      //audience
      {type:"input",
        name:"who",
        message:"Who is the audience and why do they care?"},
      //the purpose
      {type:"input",
        name:"description",
        message:"whats the purpose of this program/application?"},
      //instalation instructions 
      { type:"input",
      name:"install",
      question: "how does the person install the application"
      },
      //test instructions
      { type:"input",
        name:"test",
        question:"what are the test instructions"
      }
    ]
        
        )
      
    )})
// table of contents using a promise

    // write file 
    profile.then(function(data){
      const readMe=`# ${data.title}
  
      # Table of Contents
      -[Description](#description)
      -[Installation](#installation)
      -[Usage](#usage)
      -[Test](#test)
      -[Credits](#credits)
    
        ## Description:
           ${data.description}
        ## Installation:
           ${data.install}
        ## Usage:
            ${data.who}
        ## Test 
            ${data.test}
        ## Credits
            git hub: ${data.git}
            email: ${data.email}
    
      `

      fs.writeFile('README.md',readMe,function(err){
        if(err){
          console.log(error)
        }
        console.log("goodJob")
      }
      )
    }
    )