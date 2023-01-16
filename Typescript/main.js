"use strict";
// Typescript treats a file as a script instead of module. 
// So there was an error on message variable cannot redeclare the message variable block scope
// In order to treat typescript file as a module just export nothing then it will act as a module
exports.__esModule = true;
var message = 'Hello world Himanshu';
console.log(message);
// We can define the type of a variable in typescript
var a = 5;
var b = true;
var c = 'Himanshu';
// a='well' *** you can not assign number type variable to any other in typescipt
c = 'Himanshu Raheja';
// null and undefined are also types in typescript
var d = null;
var e = undefined;
// declaring an array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//Both the declarations are same nothing different in terms of performance as well
var mixList = ['Hello', 1]; // only 2 values are allowed in this now first is string and another is number
// mixList = [1, 'Hello']; // order can not be changed
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {})); // by default 0, 1, 2 are being assigned to enum values, you can override that
var colorGreen = Color.Green;
console.log(colorGreen); // 6
// Variable of type any - when you are not sure about the type of the value
// any type of value can be assigned to it 
var anyTypeVariable = 'Hello';
anyTypeVariable = true;
anyTypeVariable = 123;
// any type will not enforce us to do any type of checking.
// it does not check whether you call, construct or access any properties on those values
// example:
var myV = 10;
console.log(myV.name); // no error at compile time
myV(); // no error at compile time
myV.toUpperCase(); // no error at compile time
// To overcome this problem ts 3.0 comes up with unknown type
var unKn = 10;
// console.log(unKn.name) // error at compile time
// unKn(); // error at compile time
// unKn.toUpperCase(); // error at compile time
/*** In order to run this we can
 * use assersation with unknown type by
 * assertion we are giving surity to typescript that we are checking
***/
console.log(unKn.toUpperCase()); // no error at compile time
// new case
var newVar;
newVar = 5;
newVar = true;
// All the above 3 statements are completely fine but let's look below now
var newVar2 = 5;
// newVar2 = true; 
// Typescripts knows that newVar2 is of type number when it is intitalized 
// in the same line so that's why an error
/** Union type
 *  A variable can be combination of few types
 */
var comboVar;
comboVar = true;
comboVar = 5;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, '10'); //Error as num2 is number defined in the def of the function
// Optional parameter
function add2(num1, num2) {
    if (!num2) {
        return num1;
    }
    else {
        return num1 + num2;
    }
}
// optional parameter with default value 20
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
}
// function with return types can also be defined
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    return num1 + num2;
}
// interface provides a way to define object type
function checkMate(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
function checkMate2(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Him',
    lastName: 'Tim'
};
var p2 = {
    firstName: 'Him'
};
checkMate2(p);
