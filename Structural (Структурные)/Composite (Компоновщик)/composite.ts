interface CompanyInterface {
    stuff(): string;
}

abstract class Company implements CompanyInterface{
    parent: Company | null;
    setParent(parent: Company | null) {
        this.parent = parent;
    }
    getParent(): Company | null {
        return this.parent;
    }
    add(company: Company): void {}
    remove(company: Company): void {}
    isComposite(): boolean {
        return true;
    }
    abstract stuff(): string;
}

class Designer extends Company {
    stuff(): string {
        return 'Designer';
    }
}

class Developer extends Company {
    stuff(): string {
        return 'Developer';
    }
}

class Department extends Company {
    children: Array<Company> = new Array<Company>();
    add(company: Company): void {
        this.children.push(company);
        company.setParent(this);
    }
    remove(company: Company): void {
        const companytIndex = this.children.indexOf(company);
        this.children.splice(companytIndex, 1);
        company.setParent(null);
    }
    stuff() {
        const array = [];
        for (const child of this.children) {
            array.push(child.stuff());
        }
        return ` Company Department of \"${array.join(' and ')}\"`;
    }
}

function companyEmployees(company: Company) {
    console.log(`Company Employees: ${company.stuff()}`);
}
const developer = new Developer();
companyEmployees(developer);
console.log(' ');

const company = new Department();
const department = new Department();
department.add(new Designer());
department.add(new Developer());
company.add(department);
const otherDepartment = new Department();
otherDepartment.add(new Developer());
otherDepartment.add(new Designer());
company.add(otherDepartment);
const anotherDepartment = new Department();
anotherDepartment.add(new Developer());
anotherDepartment.add(new Designer());
company.add(anotherDepartment);
companyEmployees(company);
console.log(' ');

function companyEmployees2(company1: Company, company2: Company) {
    if (company1.isComposite()) {
        company1.add(company2)
    }
    console.log(`Company Employees: ${company1.stuff()}`);
}
companyEmployees2(company, developer);
