class EmployeePayrollData{
    //property
    id;
    name;
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
    set setId(id){
        this.id = id;
    }
    get name(){
        return this.name;
    }
    set setName(name){
        let nameRegex = new RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)){
            this.name = name;
        }else{
            throw "Invalid name";
        }
    }
    get salary(){
        return this.salary;
    }
    set setSalary(salary){
        this.salary = salary;
    }
    get gender(){
        return this.gender;
    }
    set setGender(gender){
        this.gender = gender;
    }
    get startDate(){
        return this.startDate;
    }
    set setStartDate(startDate){
        this.startDate = startDate;
    }

    // Method
    toString() {
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary + " Gender = " + this.gender + " Start Date : " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(101, "Mark", 30000);
console.log(employeePayrollData.toString());

try{
    employeePayrollData.setName="jonh";
}catch(e){
    console.error(e);
}
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(1, "Terisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());