class Employee {
    employeeName = ""

    setEmployeeName(str: string) {
        this.employeeName = str
    }
    getEmployeeName() {
        return this.employeeName
    }
}

const employeeOne = new Employee()
employeeOne.setEmployeeName("Andi")

console.log(employeeOne.getEmployeeName());
