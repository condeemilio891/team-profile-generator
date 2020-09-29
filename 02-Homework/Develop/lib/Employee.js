// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name,id,email,role){
        this.name=name
        this.id=id
        this.email=email
        this.role=role
    }

    

    getname(){
        console.log(`Name: ${this.name}`)
    }
    getid(){
        console.log(`id:${this.id}`)
    }
    getemail(){
        console.log(`Email:${this.email}`)

    }
    getrole(){
        console.log(`role: ${this.role}`)
    
}}


module.exports=Employee;
const AngelaDeth=new Employee('Angela-Deth',1,"lorem@lorem.com","staff-member",)

AngelaDeth.getname()
AngelaDeth.getid()
AngelaDeth.getemail()
AngelaDeth.getrole()