var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Company.prototype.getParent = function () {
        return this.parent;
    };
    Company.prototype.add = function (company) { };
    Company.prototype.remove = function (company) { };
    return Company;
}());
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Designer.prototype.stuff = function () {
        return 'Designer';
    };
    return Designer;
}(Company));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.stuff = function () {
        return 'Developer';
    };
    return Developer;
}(Company));
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = new Array();
        return _this;
    }
    Department.prototype.add = function (company) {
        this.children.push(company);
        company.setParent(this);
    };
    Department.prototype.remove = function (company) {
        var companytIndex = this.children.indexOf(company);
        this.children.splice(companytIndex, 1);
        company.setParent(null);
    };
    Department.prototype.stuff = function () {
        var array = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            array.push(child.stuff());
        }
        return " Company Department of \"".concat(array.join(' and '), "\"");
    };
    return Department;
}(Company));
function companyEmployees(company) {
    console.log("Company Employees: ".concat(company.stuff()));
}
var company = new Department();
var department = new Department();
department.add(new Designer());
department.add(new Developer());
company.add(department);
var otherDepartment = new Department();
otherDepartment.add(new Developer());
otherDepartment.add(new Designer());
company.add(otherDepartment);
var anotherDepartment = new Department();
anotherDepartment.add(new Developer());
anotherDepartment.add(new Designer());
company.add(anotherDepartment);
companyEmployees(company);
