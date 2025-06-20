//there are two typesof datatypes (primitive and non primitive)
/*
primitive
there are 7 types ofa primitive datatypes
7datatypes: string, number, boolean, null , undefined, Symbol, BigInt
*/
const score = 322
const scoreValue =322.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

const bigNumber = 54547757575347n
//Reference(non primitive)
/*
there are 3 types of non primitive datatypes(array, objects,function)
*/

const heros = ["keshab", "bhuwan", "prakash"] //array

 let myObj = {
    name: "niru",
    age:54,
}
const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);

