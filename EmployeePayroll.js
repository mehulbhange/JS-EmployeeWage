class EmployeePayrollData{
    //property
    id;
    name;
    salary;
    
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
        
    }
    //getter setter
    get id(){
        return this.id;
    }
    set id(id){
        this.id = id;
    }
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }
    

    // Method
    toString() {
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(101, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="John";
console.log(employeePayrollData.toString());