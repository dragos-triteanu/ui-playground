/*global  console*/
/***********
 *** 7 - Arrays ***
 ***********/
var someArray = ['one', 'two', 'three', 'four', 'five'];
console.log("ArrayLength:" + someArray.length);

//array size is calculated as the index of the last element in the array + 1.
someArray[10] = "ten";
console.log("ArrayLength:" + someArray.length);

//alternative to push
someArray[someArray.length] = 'six';
console.log(someArray);

delete someArray[10];
console.log("Array after deletion of 10 element: " + someArray);

//Remove unused values (1st param represents position, 2nd param represents number of elements to eliminate)
someArray.splice(5, 6);
console.log("Array after splice: " + someArray);

//Arrays.sort method treats all elements of an array as strings, so it does not work for sorting numeric values.
//Must specify a sort function.
var someArray = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
someArray.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
console.log(someArray);

//Unshift pushes elements at the beginning of an array
someArray.unshift("x");
