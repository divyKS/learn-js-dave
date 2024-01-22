// let confirmation = confirm("Want to play?");
// confirmation ? location.reload():alert("Levi");

while(true){
    break;
}

myNumber = 0;
while(myNumber < 10){
    myNumber += 0.3;
    myNumber ++;
    myNumber = myNumber + 1;
    console.log(myNumber);
}

do{
    console.log(myNumber);
}while(myNumber < 10);

for(let i = 0; i < 5; i++){
    console.log(i);
}

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf('@'));
}

console.log(getUserNameFromEmail("harryporter@hogwarts.ac.in"))

//anonymous function: functions without any name
const sum = function (num1, num2){return num1 + num2;}
console.log(sum(6, 6));

//arrow functions
const product = (num1, num2) => {return num1 * num2;}
console.log(product(12, 2));

