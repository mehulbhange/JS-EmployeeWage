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
    get getId(){
        return this.id;
    }
    set setId(id){
        this.id = id;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
    get getSalary(){
        return this.salary;
    }
    set setSalary(salary){
        this.salary = salary;
    }

    // Method
    toString() {
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(101, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.setName="John";
console.log(employeePayrollData.toString());