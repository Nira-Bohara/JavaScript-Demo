//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

/*
example:
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
*/


//The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.

let myDate = new Date()
console.log(myDate.toDateString());
//The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone.

console.log(myDate.toString());
//The toString() method of Object instances returns a string representing this object. This method is meant to be overridden by derived objects for custom type coercion logic.
console.log(myDate.toLocaleString());
//The toLocaleString() method of Date instances returns a string with a language-sensitive representation of this date in the local timezone. In implementations with Intl.DateTimeFormat API support, this method delegates to Intl.DateTimeFormat.
console.log(typeof myDate);
/*
let myCreatedDate = new Date(2023,0,23)
let myCreatedDate =new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toDateString());
*/
//The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone.
let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
console.log(newDate);
console.log(newData.getMonth() +1);
console.log(newDate.getDay());
`${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long",
})












