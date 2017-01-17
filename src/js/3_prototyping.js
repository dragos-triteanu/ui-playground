/*global console*/
/****************
 ***PROTOTYPING***
 ****************/
//Knowing that all objects prototype from Object
Object.prototype.inheritedProperty = "inheritedProperty";
Object.prototype.myFunction = function () {
    console.log(this.inheritedProperty + "called");
};
//All objects receive values added to the prototype
var x = {internalProperty: "internalProperty"};
console.log("Has own property internalProperty: " + x.hasOwnProperty("internalProperty"));
console.log("Has own property inheritedProperty: " + x.hasOwnProperty("inheritedProperty"));
x.myFunction();

/********************
 ***CLASS HIERARCHY***
 ********************/
console.log("=== CLASS HIERARCHY ===");
var Animal = function (name) {
    var
        _name = name;

    this.setName = function (newName) {
        this._name = newName;
    };
    this.getName = function () {
        return this._name;
    };
};

var Cat = function (isKitten) {
    var
        kitten = isKitten;
};

Cat.prototype = new Animal();

var someCat = new Cat(true);
someCat.setName("kittens");
console.log(someCat.getName());

/******************************
 ***ITERATING OVER PROPERTIES***
 ******************************/
//Iterating over x should give us all the properties x has + all the properties found in the inheritance chain.
console.log("===PROPERTIES OF X===");
for (var property in x) {
    console.log(property);
}
/********************
 ***DELETING FIELDS***
 ********************/
//delete does not affect the hierarchy chain, only the actual object is modified.
console.log("===AFTER DELETE===");
delete x.internalProperty;
console.log(x);
