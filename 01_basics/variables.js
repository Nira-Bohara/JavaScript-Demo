const accountId = 32434
let accountEmail = "niru2@gmail.com"
var accountCity = "ktm"
/*
prefer not to use var 
 becaise of issue in block scope and functional scope
 */
let accountPassword = "3435"

//accountId =343 (not allowed)//const variable cannot be changed in JavaScript.
accountCity ="mnr" //var can be changed in js
accountEmail ="niru@344gmail.com"//let can also change in js 
 console.table([accountId, accountEmail, accountCity, accountPassword]) // shortcut for console (console.table)