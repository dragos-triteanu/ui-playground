/*global  console*/
/************
 *** 6 - Modules ***
 ************/
// Importing a module using require
var _ = require('lodash');

// import * as _ from 'lodash' // Although part of ECMA, it is not supported by node yet

var program = {};
program.module = (function () {
  let privateVar = 0;

  return {
    setVar: function (variable) {
      privateVar = variable;
    },
    getVar: function () {
      return privateVar;
    }
  };
}());

let someArray = [1, 2, 3, 4, 5];

console.log(_.filter(someArray, item => item === 3));

program.module.setVar(7);
console.log(program.module.getVar());