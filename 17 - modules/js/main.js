// MODULES
// we have to add type="module" attrubite in the java script, withit the defer attribute is also implied 
// adding the type="module" attibute makes the js strict "use strict"; 

// the default function can be imported by ->
// we can change the name by which we acees the function in this file
import playGuitar from "./guitar.js";
import { fingerstyle as A, acoustic as B} from "./guitar.js";

import * as Guitars from "./guitar.js";

console.log(playGuitar());
console.log(A());
console.log(B());

console.log("-------------------")

console.log(Guitars.default());
console.log(Guitars.acoustic());
console.log(Guitars.fingerstyle());

console.log("-------------------")

import User from "./user.js";
const obj1 = new User("ds@k.com", "dsk");
console.log(obj1);
console.log(obj1.greeting());

// modules are used in project with tool like babble to convert to odler java script