/*global console*/
/****************
 *** 3 - PROTOTYPING ***
 ****************/




console.log('############# 3.0 - Prototyping Object #############');

console.log(
    'NOTE: Knowing that all objects prototype from Object, performing Object.prototype.someProperty will make the property available for every object');
console.log('NOTE: All objects receive values added to the prototype');
//Adding a property on object
Object.prototype.inheritedProperty = "inheritedProperty";

//Adding a function on object
Object.prototype.myFunction = function () {
  console.log('myFunction:: ', this.inheritedProperty + "called");
};

var x = {internalProperty: "internalProperty"};
console.log("Has own property internalProperty:: " + x.hasOwnProperty(
    "internalProperty"));
console.log("Has own property inheritedProperty:: " + x.hasOwnProperty(
    "inheritedProperty"));
x.myFunction();
console.log('inheritedProperty', x.inheritedProperty);





console.log('############# 3.1 - Class hierarchy #############');

let Animal = function (name) {
  var _name = name;

  this.setName = function (newName) {
    this._name = newName;
  };
  this.getName = function () {
    return this._name;
  };
};

let Cat = function (isKitten) {
  let kitten = isKitten;

  this.isKitten = function () {
    return kitten;
  }

};

console.log(
    'NOTE: For the Cat -> Animal relationship, we can define inheritance as Cat.prototype = new Animal()');
Cat.prototype = new Animal();

var someCat = new Cat(true);
someCat.setName("kittens");

console.log('Cat name (inheritedProperty):: ', someCat.getName());
console.log('Cat isKitten (ownProperty):: ', someCat.isKitten());





console.log('############# 3.2 - Iterating over properties #############');

console.log(
    'NOTE: Iterating over x should give us all the properties x has + all the properties found in the inheritance chain.');

let propertiesOnObject = {prop1: 'prop1', prop2: 'propJoe'};

for (let property in propertiesOnObject) {
  console.log(property + ' has value ::', propertiesOnObject[property]);
}

console.log(
    'NOTE: For the Cat -> Animal relationship, we can define inheritance as Cat.prototype = new Animal()');
console.log(
    'NOTE: Delete does not affect the hierarchy chain, only the actual object is modified');

let deleteObj = {internalProp: 'prop'};
console.log('Before deleting internalProp from deleteObj::', deleteObj);
delete deleteObj.internalProp;
console.log('After deleting internalProp from deleteObj::', deleteObj);
