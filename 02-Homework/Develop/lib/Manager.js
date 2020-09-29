// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee=require('./Employee')

class Manager extends Employee{
    constructor(name,id,email,role,OfficeNumber){
        super(name,id,email,role)
        this.OfficeNumber=OfficeNumber
    }
    getofficenumber(){
        console.log(`Office#: ${this.OfficeNumber}`)
    }
    }

    module.exports=Manager
const SnakeVargas=new Manager('Snake Vargas',4,"lorem","manager",1)
SnakeVargas.getname()
SnakeVargas.getid()

SnakeVargas.getemail()
SnakeVargas.getrole()
SnakeVargas.getofficenumber()
