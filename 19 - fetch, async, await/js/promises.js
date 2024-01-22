// Promises can have three states -> Pending, Fullfilled, Rejected. Promises deliver async code but javascript is synchronous. 

const myPromise = new Promise((resolve, reject)=>{
    const error = false;
    if(!error){
        resolve("Promise has been resolved!");
    } else {
        reject("Promise has been rejected!");
    }
});

console.log(myPromise); // but this displays the state of the promise not it's value
// to get the value out of promise we need to chain the promises and that chaining in starting was done by thenables

myPromise.then( (value) => {
    console.log(value);
});

myPromise.then( (value) => {
    return value + "This will be returned to the newValue"; 
}).then( (newValue) => {
    console.log(newValue);
}).catch( err => {
    // catch to catch the error from the promise if it is rejected or any error caused in anywhere here 
    // if error is found anywhere it skips the chains and directly comes here to the catch block
    console.error(err);

});

// fetch api returns the promise on its own 
// fetch api to rquest data from another site on the web and we need to wait for that data to come and till then we have to tell our code to wait 

const anotherPromise = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve("this promise also resolved!");
    }, 3000);
});

// now calling these promises, take value from them and log the value
anotherPromise.then(value=>{
    console.log(value);
});
myPromise.then(value=>{
    console.log(value);
});

// using fetch api to show pending state of a promise
const user = fetch("https://jsonplaceholder.typicode.com/users");
// it will say to the code you go ahead i will catch up
// we solve that by thenables, after the prmoise is executed then do the next things
console.log(user);

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // fetch the thing from the api call and then do this with the response 
        // but its not the correct form to work with, we would make it into json
        
        // console.log(response);

        return response.json(); // this also returns a promise

    })
    .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user);
        });
    });

// a huge chain of thenables is also not preferred
// so to write it more cleanly we do async and await