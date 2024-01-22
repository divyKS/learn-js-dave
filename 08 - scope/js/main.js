// have almost stopped using var now, let and const is only used 
var x = 1;
var x = 2; // this didn't gave error so csed problems, let in this case would give errors 
x = 10;

let y = 1;
// let y = 1; give error
y = 20;

const name="12th Class";
// name = 12;can't do since its value can't be changed once declared

//global scope 
var a = 1;
let b = 2;
const c = 3;

// block scope, inside the  curly braces and can re declare all those which are in global
// with if, switch, for, while, do while loops, we create a local scope there 
{
    var a = 10.09;
    let b = 4;
    const c = 9;    
}

// local scope which is inside functions
// we can have block inside local, local inside block...
function myFunction(){
    {
        let u = 10;
        // we can't access it outside
    }
    const z = 5;

    console.log(z);
}

myFunction();

// while printing the block would first look for its variable then it looks for variable of its parent then it looks for its parent even more outside like the global ones
// var is function scoped, hence the following below will print the inner value


function concept1(){
    var d = "name1";
    {
        var d = "name2"; //var is function scoped
    }
    console.log(d); 
}

concept1();

// use const if you are not going to change the values