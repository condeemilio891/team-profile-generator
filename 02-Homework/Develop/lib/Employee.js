 // TODO: Write code to define and export the Employee class

class Employee {
    constructor(name,id,email){
        this.name=name
        this.id=id
        this.email=email
    }

    printInfo(){
        console.log(`name: ${this.name}`)
        console.log(`role: ${this.id}`)
    }

    getname(){
        console.log(`${this.name}`)
    }
    getid(){
    }
    getemail(){

    }
}
module.exports=Employee;
const employee=new Employee('Angela-Deth',"staff-member")

employee.printInfo()