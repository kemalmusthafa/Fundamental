// Exercise - Employee Salary
//  ● Specifications :
//  ○ Create a program to calculate total salary based on employee type
//  ○ There are two types of employee : full-time & part-time
//  ○ Salary for full-time employee : 
// ■ IDR 100.000 / hour
//  ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
//  ○ Salary for part-time employee : 
// ■ IDR 50.000 / hour
//  ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
//  ● Requirements :
//  ○ Create an Employee as a parent class
//  ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
//  ■ Create a method in that class to add working hour per day
//  ■ Create a method in that class to calculate total salary
//  ○ Use inheritance concept


class Employee {
    isName = ""
    isType = ""
    #hour = 0
    #bSallary = 0
    #otSallary = 0

    constructor (name: string, type: string, bSallary: number, otSallary: number) {
        this.isName = name
        this.isType = type
        this.#bSallary = bSallary
        this.#otSallary = otSallary
    }

    setHour (n: number){
        this.#hour += n
    }

    getSallary () {
        if (this.#hour <= 6) {
            return this.#bSallary * this.#hour
        } else {
            return this.#bSallary * 6 + this.#otSallary * (this.#hour - 6)
        }
    }
}


class FullTimeEmployee extends Employee {
    constructor(name: string) {
        super (name, "Full-time", 100000, 75000)
    }
}
class PartTimeEmployee extends Employee {
    constructor(name: string) {
        super (name, "Full-time", 75000, 30000)
    }
}

const employeeOne = new FullTimeEmployee ("Kemal")
employeeOne.setHour(10)
console.log(employeeOne.getSallary());

const employeeTwo = new PartTimeEmployee ("Muno")
employeeTwo.setHour(2)
console.log(employeeTwo.getSallary());


