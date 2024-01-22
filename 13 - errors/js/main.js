"use strict"; // this enforces some rules of writing syntax correctly 
const rollNo = 11; // without const we would get reference error
console.log(rollNo);
// Object..create(); syntax error 
// type error assigning const again
const makeError = () => {
    try{
        rollNo = 20;
    } catch(e){
        console.log(e);
        console.warn(e);
        console.error(e);
        console.table(e);

        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);

    }
}
makeError();
const makeError2 = () => {
    try{
        throw new customError("I am a custom error");
    } catch(e){
        console.table(e);
    }
}
makeError2();

// using generic error constructor
const makeError3 = () => {
    try{
        throw new Error("I am a custom error");
    } catch(e){
        console.table(e);
    } finally{
        console.log("I am finally block");
    }
}
makeError3();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}