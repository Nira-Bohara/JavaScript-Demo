// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "782anb"
tinderUser.name="niru"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"niru24322@gmail.com",
    fullname: {
        userfullname: {
            firstname:"niru",
            lastname:"bohara"
        }
    }
}

// console.log(regularUser.lastname);

const obj1 =  {1: "a", 2: "b"}
const obj2 = {1: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1 , obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
/*
//example of object.assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

*/

const users = 
    [
      {
          id:1,
        email: "n@gmail.com"
      },
      {
        id:2,
        email:"g@gmail.com"
      },
      
    ]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));






