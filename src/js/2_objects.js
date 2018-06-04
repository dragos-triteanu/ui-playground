/*global console*/

/************
 *** 2 - OBJECTS ***
 ************/
console.log(
    '############# 2.0 - Creating an object with new #############');

/** @constructor
 *  @param {number} id The id of the element.
 *  @param {string|number|null} name The name of the element.
 * */
function SomeObj(id, name) {
  var
      /** @type {number} */
      _id = id,
      /** @type {string} */
      _name = name;

  /** @return {string|number|null} The name of the element */
  this.getName = function () {
    return _name;
  };

  /** @param {string|number|null} newName */
  this.setName = function (newName) {
    _name = newName;
  };

  /** @return {number} The id of the element */
  this.getId = function () {
    return _id;
  };

  /** @param {number} newId */
  this.setId = function (newId) {
    _id = newId;
  };

  /** @return {string} The string representation of an object */
  this.toString = function () {
    return "SomeObj : {id=" + _id + ",name=" + _name + "}";
  };

  /** @return {string} The type of the object */
  this.type = function () {
    return 'someObj';
  }

}

var someObj = new SomeObj(1, "x");
console.log('ToString of object:: ', someObj.toString());
console.log('typeof object:: ', typeof someObj);

console.log(
    '############# 2.1 - Creating an object with new #############');

var someOtherObject = {
  _id: 2,
  _name: "y",
  getId: function () {
    return this.id;
  },
  setId: function (newId) {
    this.id = newId;
  },
  getName: function () {
    return this.name;
  },
  setName: function (newName) {
    this.newName = newName;
  },
  toString: function () {
    return "SomeObj : {id=" + this._id + ",name=" + this._name + "}";
  }
};

console.log('ToString of object:: ', someOtherObject.toString());

console.log(
    '############# 2.2 - Enums #############');
/**
 * @enum {string}
 */
var POSSIBILITY = {
  YES: 1,
  NOT: -1,
  MAYBE: 0
};

console.log(
    '############# 2.3 - Object property checking and manipulation #############');

console.log(
    'NOTE: Property existence can be checked with the ||, which allows for the specification of an alternative value');

console.log('var field = someObj.nonExistentField || "unexistent";');
// The || operator can be used to fill in default values
var field = someObj.nonExistentField || "unexistent";

console.log(
    'NOTE: Attempting to retrieve values from undefined will throw a TypeError exception. This can be guarded against with the && operator');
console.log(
    'var field = someObj.nonExistentField && someObj.nonExistentField.anotherValue');
var field = someObj.nonExistentField && someObj.nonExistentField.anotherValue;
