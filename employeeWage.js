// UC 2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 160;

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
 
let empWorkingDays = 0;
let empWorkingHrs = 0;

while (empWorkingHrs <= MAX_WORKING_HRS && empWorkingDays < NUM_OF_WORKING_DAYS){
    empWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empWorkingHrs += getWorkingHours(empCheck);
}

let empWage = empWorkingHrs * WAGE_PER_HOUR;
console.log("Total Days : "+empWorkingDays + " Total Hrs : "+ empWorkingHrs+ " Employee wage : "+ empWage);