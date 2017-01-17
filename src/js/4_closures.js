/*global console*/

/*************
 ***CLOSURES***
 *************/

/**
 Functions can be defined inside of other functions. An inner function of course has access to its parameters and variables.
 An inner function also enjoys access to the parameters and variables of the functions it is nested within.
 The function object created by a function iteral contains a link to that outer context. This is called closure. This is the
 source of enormous expressive power.
 */
console.log("=== CLOSURES ===");
var ClosureObj = function () {
    var value = 0; // the returned function has access to this variable's state
    return {
        increment: function () {
            value++;
        },
        getValue: function () {
            return value;
        }
    };
};

var closureObj = new ClosureObj();
closureObj.increment();
console.log(closureObj.getValue());




