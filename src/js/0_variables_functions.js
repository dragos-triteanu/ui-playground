/**
 * 01 - Variables
 */
console.log('############# 0.1 - Variables (var,let,const) #############');
/** var */

var someVar = 'ics'; // Declaring a general purpose variable in javascript is performed using the 'var' keyword

/** const and let
 *
 * ES6 introduced the 'let' and 'const' keywords for declaring more specific variables.
 *
 * `const` is a signal that the identifier won’t be reassigned (although the variable will not be immutable).
 *
 *  `let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.
 *
 * */

const someConst = 'abs'; // someConst = 'q'; --> should trigger an error
let someLet = 'abc';

/** var vs let **/
// The difference between let and var is scoping
// --> let isc scoped to the nearest block (a for loop for example)
// --> var is scoped to the nearest function
var wilLExist = 1;

for (let willBeCollected = 0; willBeCollected < 3; willBeCollected++) {
}

console.log('var still exists', wilLExist);

// console.log('let was collected', willBeCollected); //throws error

/**
 * 02 - Functions
 */
console.log('############# 0.2 - Functions #############');
// Declaring a js function

function someFunction() {
  console.log('function someFunction(){}');
}

var varFunction = function () {
  console.log('var function = function(){}');
};

someFunction();
varFunction();

// Inline JS function declaration and call
(function inlineFunction(someArgument) {
  console.log('(function inlineFunction(someArgument){})(' + someArgument
      + ')');
})('inline');


