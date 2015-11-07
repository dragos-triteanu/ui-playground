/*global console*/

/** @const */
var SOME_CONSTANT = 'constant';

/**
 * @enum {string}
 */
var POSSIBILITY = {
      YES: 1,
      NOT: -1,
      MAYBE: 0
   };

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
   this.getName = function () {return _name; };

    /** @param {string|number|null} newName */
   this.setName = function (newName) { _name = newName; };

    /** @return {number} The id of the element */
   this.getId = function () {return _id; };

    /** @param {number} newId */
   this.setId = function (newId) { _id = newId; };

    /** @return {string} The string representation of an object */
   this.toString = function () { return "SomeObj : {'id'=" + _id + ",'name'=" + _name + "}"; };

}

var someObj = new SomeObj(1, "x");
console.log(someObj.toString());