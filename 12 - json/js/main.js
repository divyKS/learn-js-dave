// JAVASCRIPT OBJECT NOTATION

const myObj = {
    name: "divy",
    hobbies: ["eat", "sleep", "repeat"],
    hello: function(){
              console.log("hi!")
           }
};
console.log(myObj);

// JSON doesn't send functions so those are left hence the hello function will not be present
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);

// while receiving some JSON from some server etc.
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
