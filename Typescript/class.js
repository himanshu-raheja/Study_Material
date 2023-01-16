"use strict";
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
exports.__esModule = true;
/**
 * Inheritance can be achived in classes using extends keyword
 * There are 3 access modifiers private, public & protected for the properties & methods
 * By default properties & methods are public
 * Public: accessible to class as well as outside
 * Protected: accesible inside class & inherited classes only
 * Private: accesible inside owning class not even in inherited classes as well
 */
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.employeName = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log("Hello ".concat(this.employeName, " of ").concat(this.age));
    };
    return Employee;
}());
var e1 = new Employee('Himanshu', 27);
e1.greet();
// console.log(e1.age) age not accessible as private
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        return _super.call(this, name, age) || this;
    }
    Manager.prototype.display = function () {
        console.log('I am the manager');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Himz', 28);
m1.greet();
m1.display();
