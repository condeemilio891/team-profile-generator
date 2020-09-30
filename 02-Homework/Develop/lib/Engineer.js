// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee=require('./Employee');

class Engineer extends Employee{
    constructor(name,id,email,gitHubUser){
        
      super(name,id,email)
      this.gitHubUser=gitHubUser
      
    }
    getGithub(){
        
        return this.gitHubUser
    }
    getRole(){
      return "Engineer"
    }
}
module.exports=Engineer
const HellRazor=new Engineer('Hell-Razor',3,'engineer@gmail.com',"GitHUbUser")
HellRazor.getName()
HellRazor.getId()
HellRazor.getEmail()
HellRazor.getRole()
HellRazor.getGithub()



const DannyChelon=new Engineer('DannyChelon',3,'engineer@gmail.com',"GitHUbUser")


DannyChelon.getName()
DannyChelon.getId()
DannyChelon.getEmail()
DannyChelon.getRole()
DannyChelon.getGithub()
