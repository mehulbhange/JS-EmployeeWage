
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

let employeeDailyWage = new Array();
let employeeDailyWageMap = new Map();
let employeeDailyHoursMap = new Map();
let employeeWageObjects = new Array(); 

function getWorkingHours(empCheck){
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME: 
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calculateDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}
 
let empWorkingDays = 0;
let empWorkingHrs = 0;

while (empWorkingHrs <= MAX_WORKING_HRS && empWorkingDays < NUM_OF_WORKING_DAYS){
    empWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    empWorkingHrs += empHrs;
    employeeDailyWage.push(calculateDailyWage(empHrs));
    employeeDailyWageMap.set(empWorkingDays, calculateDailyWage(empHrs));
    employeeDailyHoursMap.set(empWorkingDays, empHrs);
    employeeWageObjects.push(
        {
            day : empWorkingDays,
            hours : empHrs,
            wage : calculateDailyWage(empHrs),
            toString() {
                return "\nDay : " + this.day + "  Hours Worked: " + this.hours + "  Wage Earned: " + this.wage
            }
        }
    )
}

//UC7 A - Calc total Wage using Array forEach or reduce method
console.log(employeeDailyWage.reduce( (e1,e2) => e1+e2, 0));

//UC7 B - Show the Day along with Daily Wage using Array map helper function
let dayCounter = 0;
function mapDayAndWage(dailyWage){
    dayCounter++;
    return dayCounter +" : "+ dailyWage;
}
let mapDayWage = employeeDailyWage.map(mapDayAndWage);
console.log(mapDayWage);

//UC7 C -Show Days when Full time wage of 160 were earned using filter function
let fullDayWageArr = mapDayWage.filter((wage) => { 
        return wage.includes(160); 
    });
console.log(fullDayWageArr);

//UC7 D - Find the first occurrence when Full Time Wage was earned using find function
console.log( mapDayWage.find( wage => { return wage.includes(160) }));

//UC7 E - Check if Every Element of Full Time Wage is truly holding Full time wage
console.log( fullDayWageArr.every( wage => { return wage.includes("160") }) );

//UC7 F - Check if there is any Part Time Wage
let partTimeWageArr = mapDayWage.filter( (wage) => { return wage.includes(80) });
console.log(partTimeWageArr);

//UC7 G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Number of days the employee worked : " + employeeDailyWage.reduce(totalDaysWorked, 0));

let totalWage = 0;
for(let wage of employeeDailyWageMap.values()){
    totalWage += wage;
}
console.log("Total employee wage : "+ totalWage);

let totalHrsWorked = 0;
for(let hrs of employeeDailyHoursMap.values()){
    totalHrsWorked += hrs;
}
console.log("Total hours worked : "+totalHrsWorked);

// Show the full workings days, part working days and no working days
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

employeeDailyHoursMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else
        nonWorkingDays.push(key);
});

console.log("Full working days : " + fullWorkingDays);
console.log("Part working days : " + partWorkingDays);
console.log("Non working days : " + nonWorkingDays);

// Calc total Wage and total hours worked
let totalWageEarned = employeeWageObjects.filter(empWage => empWage.wage > 0)
                    .reduce((total, empWage) => total += empWage.wage, 0);

let totalHoursWorked = employeeWageObjects.filter(empHr => empHr.hours > 0)
                    .reduce((total, empHr) => total += empHr.hours, 0);

console.log("Total Wage : " + totalWageEarned + " Total Hours Worked : " + totalHoursWorked);

//Show the full workings days using foreach
employeeWageObjects.filter( (emp) => emp.hours == 8).forEach( (emp) => {console.log(emp.day) });

//Show Part working days using Map by reducing to String Array
let partWorkingDays1 = employeeWageObjects.filter(emp => emp.hours == 4)
                                            .map(emp => emp.toString());
console.log("Part Working Days " + partWorkingDays1);

//No working days only using Map function
let nonWorkingDays1= employeeWageObjects.filter(emp => emp.hours == 0)
                                        .map(emp => emp.day);
console.log("Non Woking Days " + nonWorkingDays1);