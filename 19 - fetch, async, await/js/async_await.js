// Async/Await

// if the function is going to use async await we have to mention it before the function, await has to be inside async function


const myUsers = {
    userList: []
};

// syntax: async function myFunction(){} 
const myFunction = async() => {
    	const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonUserData = await response.json();
        return jsonUserData;
};

const herFunction = async() => {
    const data = await myFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
};

herFunction(); // dont use await outside async so print the userList in her function 

