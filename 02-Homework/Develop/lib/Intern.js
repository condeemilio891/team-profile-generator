// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee=require('./Employee')

class Intern extends Employee{
    constructor(name,id,email){
        super(name,id,email)
    }
    
    }

    module.exports=Intern
const intern=new Intern('Thrasher','intern')
intern.printInfo()