/*global console*/

/************
 ***OBJECTS***
 ************/

/** @const */
// var SOME_CONSTANT = 'constant';

/**
 * @enum {string}
 */
var POSSIBILITY = {
    YES: 1,
    NOT: -1,
    MAYBE: 0
};

/***********************
 ***OBJECT CONSTRUCTOR***
 ***********************/
//When used inside of a function, the var statement defines the function’s private variables.
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
        return "SomeObj : {'id'=" + _id + ",'name'=" + _name + "}";
    };
}

var someObj = new SomeObj(1, "x");
console.log(someObj.toString());

/******************
 ***OBJECT INLINE***
 ******************/
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
        return "SomeObj : {'id'=" + this._id + ",'name'=" + this._name + "}";
    }
};
console.log(someOtherObject.toString());

/*****************************
 ***OBJECT PROPERTY CHECKING***
 *****************************/
/** The || operator can be used to fill in default values */
var field = someObj.nonExistentField || "unexistent";
console.log(field);
/**Attempting to retrieve values from undefined will throw a TypeError exception. This can be guarded against with the && operator */
var field = someObj.nonExistentField && someObj.nonExistentField.anotherValue;
console.log(field);