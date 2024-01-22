const myArray = [];

myArray[0] = "divy";
myArray[1] = 11;
myArray[2] = true;

console.log(myArray);
console.log(myArray.length);

// adding elements of the array
myArray.push(12);
myArray.push("IIITS");

console.log(myArray);

let lastItem = myArray.pop();
console.log(lastItem);

console.log(myArray);

// this adds the element at the start of the array
myArray.unshift("START");
console.log(myArray);

// both .push and .upshift return the length of the array after the insertion

// removing from the front of the array
console.log(myArray.shift());
console.log(myArray);

// to delete some element from the middle of the array
delete myArray[1];
// but dont use this because it leaves that place as it is empty, with undefined data
console.log(myArray);
console.log(myArray[1]);

// to delete from a position of array
myArray.splice(1,2)
console.log(myArray);
// can be used to add an element
myArray.splice(1, 0, "added");
console.log(myArray);
// can be used to replace an element
myArray.splice(1, 1, "updated");
console.log(myArray);

const A = ['a', 'b', 'c', 'd', 'e'];
const B = A.slice(2,5);
console.log(A);
console.log(B);
B.reverse();
console.log(B);
const newString = A.join();
console.log(newString);
let C = newString.split(',');
console.log(C);
C = B.concat(A);
console.log(C);

// concatenation can also be done by using concat spread operator
// spread operator tells that we are not using the older arrays as elements for this array and that we are creating a new array with the elements of those arrays
C = [...A, ...B];
console.log(C);

const hotDrink = ["tea", "coffee", "water"]
const coldDrink = ["pepsi", "cola", "water"]

const northFood = ["roti", "dal", "chawal"];
const southFood = ["idli", "vada", "sambhar"];

const drink = [hotDrink, coldDrink];
const food = [northFood ,southFood];

console.log(drink[1][1]);

const nourishment = [food, drink];

console.log(nourishment[0][1][1]);