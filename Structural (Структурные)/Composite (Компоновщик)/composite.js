var Developer = /** @class */ (function () {
    function Developer(name, salary) {
        this.name = name;
        this.role = 'Developer';
        if (salary) {
            this.salary = salary;
        }
        else {
            this.salary = 1000;
        }
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    Developer.prototype.getRole = function () {
        return this.role;
    };
    return Developer;
}());
var Designer = /** @class */ (function () {
    function Designer(name, salary) {
        this.name = name;
        this.role = 'Designer';
        if (salary) {
            this.salary = salary;
        }
        else {
            this.salary = 1000;
        }
    }
    Designer.prototype.getName = function () {
        return this.name;
    };
    Designer.prototype.getSalary = function () {
        return this.salary;
    };
    Designer.prototype.getRole = function () {
        return this.role;
    };
    return Designer;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.employees = [];
    }
    Company.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Company.prototype.removeEmployee = function (employee) {
        this.employees.slice(1);
    };
    Company.prototype.salaryEmployee = function () {
        this.employees.forEach(function (employee) {
            console.log('Name: ' + employee.getName() + ' Salary: ' + employee.getSalary());
        });
    };
    return Company;
}());
var company = new Company();
company.addEmployee(new Designer('Steve;', 2000));
company.addEmployee(new Designer('Steven;'));
company.addEmployee(new Developer('Stevey;', 3000));
company.addEmployee(new Developer('Steveo;'));
console.log('Company staff:');
company.salaryEmployee();
// console.log(this.result);
