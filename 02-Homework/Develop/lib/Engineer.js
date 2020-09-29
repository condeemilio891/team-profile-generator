// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee=require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,role,github){
        
      super(name,id,email,role,)
      this.github=github
      
    }
    getgithub(){
        console.log(`Github:${this.github}`)
    }
}
module.exports=Engineer
const HellRazor=new Engineer('Hell-Razor','3','engineer@gmail.com','engineer',"Hell-Razor.github.com")
HellRazor.getname()
HellRazor.getid()
HellRazor.getemail()
HellRazor.getrole()
HellRazor.getgithub()
