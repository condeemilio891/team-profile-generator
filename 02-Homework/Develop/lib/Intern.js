// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee=require('./Employee')

class Intern extends Employee{
    constructor(name,id,email,role,school){
       
        super(name,id,email,role,)
        this.school=school
    }

    getschool(){
        console.log(`School:${this.school}`)
    }
    }
    

    module.exports=Intern
const intern=new Intern('Thrasher',10,"lorem","intern",'St.Edwards')
intern.getname()
intern.getid()
intern.getemail()
intern.getrole()
intern.getschool()