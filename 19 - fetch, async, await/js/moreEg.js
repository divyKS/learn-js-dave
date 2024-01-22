
const printUserEmails = async() => {
    	const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonUserData = await response.json();
        // map higher order function
        const userEmailArray = jsonUserData.map( user => {
            return user.email;
        });
        console.log(userEmailArray);
};

printUserEmails();
// we can't console.log(printUserEmails()) if we return userEmailArray from the function



// 2nd parameter of fetch API is an object
const getDadJoke = async()=>{
    
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET", // get is default and there are other methods too
        // below is a nested object
        headers: {
            Accept: "application/json" // to tell what kind of thing we are going to recieve 
        }
    });

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);

};

getDadJoke();

const getDadJokeAgain = async()=>{
    
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET", // get is default and there are other methods too
        // below is a nested object
        headers: {
            Accept: "text/plain" //changing type of data receiving
        }
    });

    const textJokeData = await response.text();
    console.log(textJokeData);

};
// getDadJokeAgain();

const jokeObject = {
    id: 'UKuXvzAlOuc', 
    joke: "I was going to learn how to juggle, but I didn't have the balls."
};

const postData = async ( jokeObj ) => {
    // fetch api can be used to post data too
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(jokeObj)
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse);
};

postData(jokeObject);

// in an url ? tells the start of a parameter and & tells the start of second paramter