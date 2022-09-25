class EmployeePayrollData{
    //property
    id;
    #name;
    salary;
    gender;
    startDate;

    constructor(id, name, salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
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
    get gender(){
        return this.gender;
    }
    set gender(gender){
        this.gender = gender;
    }
    get startDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this.startDate = startDate;
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