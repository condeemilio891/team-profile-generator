 // TODO: Write code to define and export the Employee class

 class Employee {
    constructor(name,id,email,role){
        this.name=name
        this.id=id
        this.email=email
        this.role=role
    }

    

    getName(){
        console.log(`Name: ${this.name}`)
        
        return this.name
    }
    getId(){
        console.log(`id:${this.id}`)
        return this.id
    }
    getEmail(){
        console.log(`Email:${this.email}`)
        return this.email
    }
    getRole(){
        console.log(`role: ${this.role}`)
        return "Employee"
    
}}


module.exports=Employee;
const AngelaDeth=new Employee('Angela-Deth',1,"lorem@lorem.com","Employee")

AngelaDeth.getName()
AngelaDeth.getId()
AngelaDeth.getEmail()
AngelaDeth.getRole()