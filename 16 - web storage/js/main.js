// WEB STORAGE API
// it is not a part of dom. It is not available to javascript through the windows global variable. 
// windows is implied so we dont have to type it. we have used this before too but because windows didn't have to be written therefore we didn't notice.
// it uses the window API


//window.alert("OUCH!"); // alert("OUCH!");
//window.alert(window.location);
//alert(location);

// local storage, session storage 
const myArr = ["eat", "sleep", "code", "repeat"];
const myObj = {
    name: "Parasite",
    hobbies: ["guitar", "drums", "piano"],
    logName: function(){
        console.log(this.name);
    }
};


// session storage is for while we are on the website or maybe while we are logged into the website, local storage stores thed ata in the browser not just when the tab is opened, its the persistent data

// sessionStorage.setItem("I stored an object in this session", myObj);
// const sessionData = sessionStorage.getItem("I stored an object in this session"); 
// console.log(sessionData); // here we get object Object as output


// session and local storage store string data, and if its not then it tries to convert it into string data, much like JSON, we would kinda convert things to JSON and then pass it the the setItem

sessionStorage.setItem("I stored an object in this session", JSON.stringify(myObj));
const sessionData = JSON.parse(sessionStorage.getItem("I stored an object in this session")); 
console.log(sessionData); // here we get object Object as output without using the JSON stringy and parse

sessionStorage.setItem("I stored an object in this session", JSON.stringify(myArr));
const sessionData2 = JSON.parse(sessionStorage.getItem("I stored an array in this session")); 
console.log(sessionData2); // this gives us the content as string without JSON, with JSON we get it as array only

// LOCAL SESSION

localStorage.setItem("I stored an object in this session", JSON.stringify(myArr));
const key = localStorage.key(0); // key are too index from 0, 1, 2, 3, 4...
const noOfItems = localStorage.length; // this gives the number of things in the local storage for that specific website/page 
localStorage.removeItem("I stored an object in this session");
localStorage.clear(); // removes all the things
const persistentData2 = JSON.parse(localStorage.getItem("this is the persistent data of my array")); 
console.log(key);
console.log(noOfItems);
console.log(persistentData2); // if the key doesn't exist then we gegt null
