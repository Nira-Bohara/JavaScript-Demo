const name = "niru"
const repoCount = 54

// console.log(name + repoCount + " value");(old )

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('nirubohara')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim(uae for remove space indetails (we cAN SEARCH trim javascript mdn))
//The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";

// syntax of trim (trim())


const url = "https://google.com/goole%20niru"

 console.log(url.replace('%20', '_'))

 console.log(url.includes('bohara-g'));
 //The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

 const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

//The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

 











