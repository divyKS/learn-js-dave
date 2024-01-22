const myNumber = 42;
// float also has type number only, if after decimals there are only zeroes then it will print 42, otheriwse it prints the complete decimal number
const myFloat = 42.0;
console.log(myNumber === myFloat);
let myString = "42";

// type casting
// numbers are printed in blue, string are printed in white
console.log(Number(myString) === myNumber); 

console.log(Number("string")); // Not a Number NaN
console.log(Number(true)); 
console.log(Number(false)); 
console.log(Number(undefined)); // Not a Number NaN

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));

console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myFloat));
myString = "12.89ab.23"
console.log(Number.parseFloat(myString)); // removes the non numeric characters

console.log(Number.parseInt(myString)); // also removes the non numeric characters

console.log(myFloat.toFixed(1)); // returns in form of string

console.log(myNumber.toString());

// Number.isNaN() = checks if the passed value is NaN and its type if number
console.log(Number.isNaN("divy"));         // didn't get

// global isNaN() function
console.log(isNaN("yvid"));

console.log(Math.random()) // 0 to 1 excluding 1
console.log(Math.random()*10) // 0 to 10 excluding 10
console.log(Math.random()*10 + 1) // 1 to 10 

// and use math.floor + 1 instead of math.ceil