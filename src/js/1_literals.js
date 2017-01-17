/*global console*/
/************
 ***NUMBERS***
 ************/
var
    myNumber = new Number(23), // An object.
    myNumberLiteral = 23; // Primitive number value, not an object.

//Javascript only has 'numbers' that are equivalent to Java's double.
var
    x = 100,
    y = 1e2, // 1e2 is calculated as (1x10)^2
    z = 100.0;

console.log(x === y);
console.log(x === z);

/************
 ***STRINGS***
 ************/
var
    myString = new String('male'), // An object.
    myStringLiteral = 'male'; //Primitive string value, not an object.

//A literal definition is a primitive
console.log("Type:" + (typeof "x") + " Length:" + "x".length);
//An empty string can be a property
var emptyString = {"": "yes"};
console.log("EmptyString:" + emptyString);

/*************
 ***BOOLEANS***
 *************/
var
    myBoolean = new Boolean(false), // An object.
    myBooleanLiteral = false; // Primitive boolean value, not an object.

/**
 Here are the falsy values:
 • false
 • null
 • undefined
 • The empty string ''
 • The number 0
 • The number NaN
 */

/***********
 ***OBJECT***
 ***********/
var
    myObject = new Object(),
    myObjectLiteral = {};

/**********
 ***ARRAY***
 **********/
var
    myArray = new Array('foo', 'bar'),
    myArrayLiteral = ['foo', 'bar'];

/*************
 ***FUNCTION***
 *************/
var
    myFunction = new Function("x", "y", "return x*y"),
    myFunctionLiteral = function (x, y) {
        return x * y;
    };

/***********
 ***REGEXP***
 ***********/
var
    myRegExp = new RegExp('\bt[a-z]+\b'),
    myRegExpLiteral = /\bt[a-z]+\b/;

/**********
 ***ERROR***
 **********/
var
    myError = new Error('Darn!'),
    myErrorLiteral = {
        name: 'TypeError',
        message: 'add needs numbers'
    };
//the error is throws using the 'throw' operator
/******************************
 ***NEW vs NOT NEW vs LITERAL***
 ******************************/
//New creates objects vs not using new, which creates primitives
var primitiveString1 = "foo",
    primitiveString2 = String('foo'),
    objectString1 = new String('foo');
// Confirm the typeof is not object.
console.log(typeof primitiveString1);
console.log(typeof primitiveString2);
console.log(typeof objectString1);