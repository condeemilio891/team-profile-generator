// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee=require('./Employee')

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber=officeNumber
    }
    getOfficeNumber(){
        console.log(`Office#: ${this.officeNumber}`)
        return this.officeNumber
        
    }

    getRole(){
        return "Manager"
    }
    }

    module.exports=Manager
const SnakeVargas=new Manager('Snake Vargas',1,"test@test.com",100)
SnakeVargas.getName()
SnakeVargas.getId()

SnakeVargas.getEmail()
SnakeVargas.getRole()
SnakeVargas.getOfficeNumber()
