/*global  console*/
/******************************
 ***METHOD INVOCATION PATTERN***
 ******************************/
console.log("=== METHOD ===");
var
    methodInvocationObj = {
        value: 0,
        getValue: function () {
            return this.value;
        }
    };
console.log(methodInvocationObj.getValue());

/********************************
 ***FUNCTION INVOCATION PATTERN***
 ********************************/
console.log("=== FUNCTION ===");
/*
 When a function is not the property of an object, then it is invoked as a function:
 var sum = add(3, 4); // sum is 7
 When a function is invoked with this pattern, this is bound to the global object.
 This was a mistake in the design of the language. Had the language been designed
 correctly, when the inner function is invoked, this would still be bound to the this
 variable of the outer function. A consequence of this error is that a method cannot
 employ an inner function to help it do its work because the inner function does not
 share the method’s access to the object as its this is bound to the wrong value. Fortunately,
 there is an easy workaround. If the method defines a variable and assigns it
 the value of this, the inner function will have access to this through that variable. By
 convention, the name of that variable is that. */
function globalObj() {
    return this; // The 'this' reffers to the window global object
}

function add(a, b) {
    return a + b;
}

var functionInvocationObj = {value: 7};
functionInvocationObj.functionInvocation = function () {
    var
        _THIS = this, // Workaround.
        helper = function () {
            _THIS.value = add(_THIS.value, _THIS.value); // without _THIS , the this refers to the global obj that does not have a value property.
        };

    helper(); // Invoke helper as a function.
};
// Invoke double as a method.
functionInvocationObj.functionInvocation();
console.log(functionInvocationObj.value);

/***********************************
 ***CONSTRUCTOR INVOCATION PATTERN***
 ***********************************/
console.log("=== CONSTRUCTOR ===");
var ConstructorInvocation = function (status) {
    this.status = status;
};

var constructorInvocationObj = new ConstructorInvocation("aStatus")
console.log(constructorInvocationObj.status);

/*****************************
 ***APPLY INVOCATION PATTERN***
 *****************************/
console.log("=== APPLY ===");
function multiply(a, b) {
    return a * b;
}

var array = [3, 4];
var sum = multiply.apply(null, array); // sum is 7
console.log(sum);

/******************
 ***HIDDEN PARAMS***
 ******************/
console.log("=== HIDDEN PARAMS ===");
var
    x = {
        hiddenParams: function () {
            console.log("THIS:");
            console.log(this);
            console.log("ARGUMENTS:");
            console.log(arguments);
        }
    }
x.hiddenParams();

