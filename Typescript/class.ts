export {}
/**
 * Inheritance can be achived in classes using extends keyword
 * There are 3 access modifiers private, public & protected for the properties & methods 
 * By default properties & methods are public
 * Public: accessible to class as well as outside
 * Protected: accesible inside class & inherited classes only
 * Private: accesible inside owning class not even in inherited classes as well 
 */

class Employee {
    employeName: string
    private age: number
    constructor (name: string, age: number) {
        this.employeName = name
        this.age = age

    }
    public greet() {
        console.log(`Hello ${this.employeName} of ${this.age}`)
    }
}

let e1 = new Employee('Himanshu', 27)
e1.greet()
// console.log(e1.age) age not accessible as private

class Manager extends Employee {
    constructor(name: string, age: number) {
        super(name, age)
    }
    display() {
        console.log('I am the manager')
    }
}

let m1 = new Manager('Himz', 28)
m1.greet();
m1.display();