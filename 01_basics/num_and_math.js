
//+++++++++++Numbera++++++++++
 
/*
Number values represent floating-point numbers like 37 or -9.25.

The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.

//example
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)
*/

const score =400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

//toString
/*
The toString() method of String values returns this string value.
console.log(balance.toFixed(1));
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
*/
console.log(balance.toFixed(1));
//The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"



const otherNumber = 23.8600
console.log( otherNumber.toPrecision(4));
//toprecision
/*
The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.
example:
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// Expected output: "123.46"

console.log(financial(0.004));
// Expected output: "0.00"

console.log(financial("1.23e+5"));
// Expected output: "123000.00"
*/


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// toLocaleString
/*
The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method delegates to Intl.DateTimeFormat.
 
example:
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Expected output: "2012. 12. 20. 오전 3:00:00"
*/


//+++++++++++++++++++maths+++++++++++++++++++
//The Math namespace object contains static properties and methods for mathematical constants and functions.

// Math works with the Number type. It doesn't work with BigInt.

//Description
// Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the Math object as a function. All properties and methods of Math are static.


console.log(Math);
console.log(Math.abs(-4));
//The Math.abs() static method returns the absolute value of a number.
console.log(Math.round(4.6));
//The Math.round() static method returns the value of a number rounded to the nearest integer.

console.log(Math.ceil(4.2));
//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.floor(4.9));
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.min(4,5,3,2));
//The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
console.log(Math.max(4,3,2,5));
//The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max -min +1))+min);













