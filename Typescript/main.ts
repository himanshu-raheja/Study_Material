// Typescript treats a file as a script instead of module. 
// So there was an error on message variable cannot redeclare the message variable block scope
// In order to treat typescript file as a module just export nothing then it will act as a module

// we can add a watcher which can watch changes if there are any in ts file, if yes it will compile again
// tsc main.ts --watch
export {}
let message = 'Hello world Himanshu'
console.log(message);

// We can define the type of a variable in typescript
let a:number = 5;
let b:boolean = true;
let c:string = 'Himanshu'


// a='well' *** you can not assign number type variable to any other in typescipt
c='Himanshu Raheja';

// null and undefined are also types in typescript

let d: null = null
let e: undefined = undefined

// declaring an array

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]
//Both the declarations are same nothing different in terms of performance as well

let mixList: [string, number] = ['Hello', 1]; // only 2 values are allowed in this now first is string and another is number
// mixList = [1, 'Hello']; // order can not be changed

enum Color {Red=5, Green, Blue} // by default 0, 1, 2 are being assigned to enum values, you can override that

let colorGreen: Color = Color.Green;
console.log(colorGreen) // 6

// Variable of type any - when you are not sure about the type of the value
// any type of value can be assigned to it 
let anyTypeVariable: any = 'Hello'
anyTypeVariable = true;
anyTypeVariable = 123;

// any type will not enforce us to do any type of checking.
// it does not check whether you call, construct or access any properties on those values
// example:
let myV: any = 10;
console.log(myV.name) // no error at compile time
myV(); // no error at compile time
myV.toUpperCase(); // no error at compile time

// To overcome this problem ts 3.0 comes up with unknown type

let unKn: unknown = 10;
// console.log(unKn.name) // error at compile time
// unKn(); // error at compile time
// unKn.toUpperCase(); // error at compile time

/*** In order to run this we can 
 * use assersation with unknown type by 
 * assertion we are giving surity to typescript that we are checking 
***/
console.log((unKn as string).toUpperCase()) // no error at compile time

// new case
let newVar;
newVar = 5;
newVar = true;
// All the above 3 statements are completely fine but let's look below now

let newVar2 = 5;
// newVar2 = true; 
// Typescripts knows that newVar2 is of type number when it is intitalized 
// in the same line so that's why an error

/** Union type
 *  A variable can be combination of few types
 */

let comboVar: boolean | number
comboVar = true
comboVar = 5


function add (num1: number, num2: number) { 
    return num1 + num2;
}

add(5, 10);
// add(5, '10'); //Error as num2 is number defined in the def of the function

// Optional parameter
function add2 (num1: number, num2?: number) { 
    if(!num2) {
    return num1;
    }
    else {
    return num1 + num2;
    }
}

// optional parameter with default value 20
function add3 (num1: number, num2: number = 20) { 
    return num1 + num2;
}

// function with return types can also be defined
function add4 (num1: number, num2: number = 20) : number { 
    return num1 + num2;
}

// interface provides a way to define object type

function checkMate(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`)
}
// So, this can be clumsy sometimes because a person can have more properties as well like city, address ...

interface Person {
    firstName: string,
    lastName: string
}
function checkMate2(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Him',
    lastName: 'Tim'
}
let p2= {
    firstName: 'Him'
}
checkMate2(p);
// checkMate2(p2); // error because p2 just have only firstName

// paramters can be optional in interface

interface Person2 { // lastName is optional
    firstName: string,
    lastName?: string
}

let typeVar=20;
// As typeVar is assigned with 20 then it will act as a number for typescript

let multitype: boolean | number
multitype = true
multitype = 30
