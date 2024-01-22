const myObj = {
    isAlive: true,
    name: "DIVY",
    age: 20,
    hobbies: ["eat", "sleep", "code", "repeat"],
    food: {
        morning: "bread", 
        afternoon: "chole",
        dinner: "khicdi"
    },
    sex: "male",

    // below is an anonymous function i.e. it has no name
    methodName: function () {
                    return (this.isAlive + " " + this.name);
                }
};
console.log(myObj["isAlive"]);
console.log(myObj.isAlive);
console.log(myObj.methodName());
console.log(myObj);

const vehicle = {
    wheels: 4,
    engine: function(){
                return "Vroom Vroom!";
            }
}

// using vehicle as a contructor 
const truck = Object.create(vehicle);
truck.doors = 2; // all these are creating new properties of the function
truck.tires = 20;
truck.load = "140T";
console.log(truck);

const car = Object.create(vehicle);
car.doors = 6;
car.engine = function (){ // overriding of engine function
                return "brrrr!";
            }
console.log(car.engine());

// the car object has already inherited the properties of the behicle object now er are creating another object to inherit the car object
const tata = Object.create(car);

console.log("--------------------------------------------------------");

const band = {
    vocals: "shrisit",
    drums: "divy",
    guitar: "sharuya",
    base: "ritik"
};

band.keyboard = "manmohan"

console.log(Object.keys(band));
console.log(Object.values(band));

// for each type loop, positions is the variable for the key
for(let positions in band){
    console.log(`on ${positions} we have ${band[positions]}`);
}

// deleting some key value from an object
delete band.keyboard;
console.log(band.hasOwnProperty("keyboard"));

console.log("--------------------------------------------------------");

// destructuring objects
// defining variables by naming the key and object that we want to pull the variable from
// we have defined a variable myVariable that takes the value stored in the band object and guitar as key
// we can define as many varibles in single line too
const {guitar : myVariable1, drums : myVariable2} = band;
console.log(myVariable1);
console.log(myVariable2);
// we can avoid an extra step by taking the variable name same as the key name 
const {vocals, drums, guitar, base} = band;
console.log(vocals);
console.log(base);

// we can use this destructing to create a function in which we can pass arguments as the key of the obect and while calling the function we can pass the object
// the arguments have to be exactly same as the object key
function bandPlayers({vocals, drums}){
    return "Singer -> "+ vocals +". Drummer -> " + drums;
}
console.log(bandPlayers(band));