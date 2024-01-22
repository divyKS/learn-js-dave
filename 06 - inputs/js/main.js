// alert("Hi!");

let myChoice = confirm("OK === true\nCancel === False");
console.log(myChoice);

let input = prompt("Enter your name deer");
if(input){ //can not use lengt function sinnce then there will be exception in null.length calculation
    console.log(input ?? "You didn't enter name and just pressed the cancel button");
} else {
    console.log("You didn't enter anything and just pressed ok so length of string is 0");
}

