let myName = "pokeman";
let size = myName.length;
let randomCharacter = myName.charAt(Math.floor(Math.random()*size ));
console.log(randomCharacter);

let soup = "eminem";
let message;
if(soup){
    message = `we have your order of ${soup}`;
} else {
    message = `sorry we don't have ${soup}`;
}

if (false) {
    console.log("Hello");
} else if (true) {
    console.log("prateek hello");
} else {
    console.log("signal nahi aaraha hai");
}

// can put expressions also in switch statement
switch("2"){
    case 1:
        console.log("haye mera dil");
        break;
    case 2:
        console.log("khush hogya mai");
        break;
    case 3:
        console.log("abe mar gaya mai");
        break;
    default:
        console.log("no match");
}

// ternary operator
let result = soup ? "yes we have soup" : false;
console.log(result);