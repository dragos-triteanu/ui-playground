/*global console*/
function SomeObj(id, name) {
   var
      _name = name,
      _id = id;

   this.getName = function () {return _name; };

   this.setName = function (newName) { _name = newName; };

   this.getId = function () {return _id; };

   this.setId = function (newId) { _id = newId; };

   this.toString = function () { return "SomeObj : {'id'=" + _id + ",'name'=" + _name + "}"; };

}

var someObj = new SomeObj(1, "x");
console.log(someObj.toString());