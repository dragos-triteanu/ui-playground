/*global  console*/
/************
 ***MODULES***
 ************/
var program = {};
program.module = (function () {
    var
        privateVar = 0;

    return {
        setVar: function (variable) {
            privateVar = variable;
        },
        getVar: function () {
            return privateVar;
        }
    };
}());

program.module.setVar(7);
console.log(program.module.getVar());