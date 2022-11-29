interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}
class Developer implements Employee {
    name: string;
    salary: number;
    role: string;
    constructor(name: string, salary?: number){
        this.name = name;
        this.role = 'Developer';
        if(salary){
            this.salary = salary;
        } else {
            this.salary = 1000;
        }
    }
    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return this.role;
    }
}
class Designer implements Employee {
    name: string;
    salary: number;
    role: string;
    constructor(name: string, salary?: number){
        this.name = name;
        this.role = 'Designer';
        if(salary){
            this.salary = salary;
        } else {
            this.salary = 1000;
        }
    }
    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return this.role;
    }
}
class Company {
    employees: Array<Employee>;
    constructor() {
        this.employees = [];
    }
    addEmployee(employee: Employee): void{
        this.employees.push(employee);
    }
    removeEmployee(employee: Employee): void{
        this.employees.slice(1)
    }
    salaryEmployee(): void{
        this.employees.forEach( function (employee) {
            console.log('Name: ' + employee.getName() + ' Salary: ' + employee.getSalary());
        })
    }
}
const company = new Company();
company.addEmployee(new Designer('Steve;', 2000));
company.addEmployee(new Designer('Steven;'));
company.addEmployee(new Developer('Stevey;', 3000));
company.addEmployee(new Developer('Steveo;'));
console.log('Company staff:');
company.salaryEmployee();
// console.log(this.result);
