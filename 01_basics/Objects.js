//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

//singleton
/*
In JavaScript, a Singleton is a design pattern that ensures only one instance of a class or object is created and provides a global point of access to it.

🔹 Use Case:
When you want to share the same object across your app, such as configuration settings, a database connection, or a logger.

//example
const Singleton = (function () {
  let instance;

  function createInstance() {
    const obj = { message: "I am the only instance!" };
    return obj;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Usage
const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // true
console.log(a.message); // "I am the only instance!"

*/

//bojeck literals - Object literals are the easiest way to create objects in JavaScript using curly braces {} with key-value pairs.
// const person = {
//   name: "Niru",
//   age: 22,
//   isStudent: true,
//   greet: function () {
//     console.log("Hello!");
//   }
// };


 const mySym = Symbol("key1")
 
const JsUser = {
    name:"niru",
    age: 18,
    location:"mnr",
    email: "niru@124.com",
    isLoggedIn: false, 
    LastLogiinDays: ["sunday", "monday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["location"]);
JsUser.email = "niru@gmail.com"
Object.freeze(JsUser)
JsUser.email = "gita@gamil.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    console.log(`hello world, ${this.name}`);
    
    
}
console.log(JsUser.greeting);



//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.
//examle
/*
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
*/

//The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
/*
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42
*/