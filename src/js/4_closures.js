/*global console*/

/*************
 *** 4 - CLOSURES ***
 *************/

/**
 Functions can be defined inside of other functions. An inner function of course has access to its parameters and variables.
 An inner function also enjoys access to the parameters and variables of the functions it is nested within.
 The function object created by a function iteral contains a link to that outer context. This is called closure. This is the
 source of enormous expressive power.

 https://www.w3schools.com/js/js_function_closures.asp
 */
console.log('############# 4 - Closure #############');
console.log('NOTE: A closure is a function having access to the parent scope, even after the parent function has closed.')

let ClosureObj = function () {
    let value = 0; // the returned function has access to this variable's state
    return {
        increment: function () {
            value++;
            return this;
        },
        getValue: function () {
            return value;
        }
    };
};

var closureObj = new ClosureObj().increment().increment();
console.log('ClosureObj counter\'s internal value::', closureObj.getValue());




