/*global console*/
/************
 *** 1 - Typing and declarations***
 ************/
console.log(
    '############# 1.1 - Primitive types (without literals) #############');
let someNumber = new Number(23);
let someString = new String('male');
let someBoolean = new Boolean(false);
let someArray = new Array('foo', 'bar');
let someObject = new Object();
let someFunction = new Function("x", "y", "return x*y");
let someRegex = new RegExp('\bt[a-z]+\b');
let someError = new Error('Darn!');

console.log(
    'Javascript primitive values (Number, String, Boolean, Object, Array, Function, RegExp, Error)');
console.log('typeof someNumber::', typeof someNumber);
console.log('typeof someString::', typeof someString);
console.log('typeof someBoolean::', typeof someBoolean);
console.log('typeof someArray::', typeof someArray);
console.log('typeof someObject::', typeof someObject);
console.log('typeof someFunction::', typeof someFunction);
console.log('typeof someRegex::', typeof someRegex);
console.log('typeof someError::', typeof someError);

console.log(
    'NOTE: typeof elements is object because everything was instantiated using "new"');

console.log(
    '############# 1.2 - Primitive types ( literals) #############');
// Same as the above, only declared using literals
let numberLiteral = 23;
let stringLiteral = 'male'; //Primitive string value.
let booleanLiteral = false; // Primitive boolean value.
let arrayLiteral = [];
let objectLiteral = {}; // Primitive object value.
let functionLiteral = function (x, y) {
  return x * y;
};
let regExpLiteral = /\bt[a-z]+\b/;
let errorLiteral = {
  name: 'TypeError',
  message: 'add needs numbers'
}; //the error is throws using the 'throw' operator

console.log('A literal is a primitive value');
console.log('typeof numberLiteral::', typeof numberLiteral);
console.log('typeof stringLiteral::', typeof stringLiteral);
console.log('typeof booleanLiteral::', typeof booleanLiteral);
console.log('typeof arrayLiteral::', typeof arrayLiteral);
console.log('typeof objectLiteral::', typeof objectLiteral);
console.log('typeof functionLiteral::', typeof functionLiteral);
console.log('typeof regExpLiteral::', typeof regExpLiteral);
console.log('typeof errorLiteral::', typeof errorLiteral);

console.log('############# 1.3 - new vs not new vs literal #############');

console.log('Taking string declarations');

//New creates objects vs not using new, which creates primitives
let stringAsLiteral = "foo",
    stringWithoutNew = String('foo'),
    stringWithNew = new String('foo');
// Confirm the typeof is not object.
console.log('typeof stringAsLiteral::', typeof stringAsLiteral);
console.log('typeof stringWithoutNew::', typeof stringWithoutNew);
console.log('typeof stringWithNew::', typeof stringWithNew);

console.log(
    'NOTE: When a variable is assigned a value using the "new" keyword, the variable\'s type becomes object');

console.log(
    '############# 1.4 - Boolean false evaluations #############');

/**
 Here are the falsy values:
 • false
 • null
 • undefined
 • The empty string ''
 • The number 0
 • The number NaN
 */

console.log('false', !!false);
console.log('null', !!null);
console.log('undefined', !!undefined);
console.log('\'\'', !!'');
console.log('0', !!0);
console.log('Nan', !!NaN);

console.log('NOTE: !! operator casts to boolean');

console.log(
    '############# 1.5 - Equality coercion #############');

/**
 * JavaScript has two sets of equality operators: === and !==, and their evil twins == and !=.
 * The good ones work the way you would expect. If the two operands are of the same type and have the same value,
 * then === produces true and !== produces false. The evil twins do the right thing when the operands are of the same type,
 * but if they are of different types, they attempt to coerce the values. the rules by which they do that are complicated and unmemorable.
 *
 * https://www.youtube.com/watch?v=6w5QDfUa5IY
 */

console.log('NOTE: === and !== work as you\'d expect. If operands of the same type and have the same value, the result is true, eitherwise it\'s false');
console.log('NOTE: == and != on objects of different types makes javascript attempt to coerce the operators');

console.log("'' == '0' ::", '' == '0');
console.log("0 == '' ::", 0 == '');
console.log("0 == '0' ::", 0 == '0');
console.log("false == 'false' ::", false == 'false');
console.log("false == '0' ::", false == '0');
console.log("false == undefined ::", false == undefined);
console.log("false == null ::", false == null);
console.log("null == undefined ::", null == undefined);
console.log("' \\t\\r\\n ::' == 0 ", ' \t\r\n ' == 0);




console.log(
    '############# 1.6 - Numbers #############');
//Javascript only has 'numbers' that are equivalent to Java's double.
var
    x = 100,
    y = 1e2, // 1e2 is calculated as (1x10)^2
    z = 100.0;

console.log('100 === 1e2 ', x === y);
console.log('100 === 100.0 ', x === z);