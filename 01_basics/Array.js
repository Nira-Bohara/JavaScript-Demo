//Array
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

/*
Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

-A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
-A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
*/



const myArr = [1,12,2,3,4,]
const myHeros = ["salman", "keshab"]
console.log(myArr[0]);

/*
in console 
we can do it 
const numbers = [1,2,3,4] 
then number 
now spand 
then we can see prototypes
*/

const myArr2 = new Array (1,2,3,4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
console.log(myArr);

