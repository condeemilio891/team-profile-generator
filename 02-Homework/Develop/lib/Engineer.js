// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee
const Employee=require('./Employee');

class Engineer extends Employee{
    constructor(){
        super('HellRazor','engineer')
    }
    
}
module.exports=Engineer
const engineer=new Engineer('Hell-Razor')
engineer.printInfo()