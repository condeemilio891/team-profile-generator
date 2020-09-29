// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee=require('./Employee')

class Intern extends Employee{
    constructor(name,id, email,school){
       
        super(name,id,email)
        this.school=school
    
    }
    
    getSchool(){
        console.log(`School:${this.school}`)
        return "UCLA"
        
    }
    getRole(){
        return "Intern"
    }
   
    }
    

    module.exports=Intern
const intern=new Intern('Thrasher',4,"test@test.com","UCLA")
intern.getName()
intern.getId()
intern.getEmail()
intern.getRole()
intern.getSchool()

console.log(intern.getName())
