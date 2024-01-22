// classes didn't come into picture until ES6
// and classes don't change how the code functions
class Pizza{
    constructor(flavour){
        this.size = "medium";
        this.crust = "original";

        this.type = flavour;
        this.toppings = [];
    }

    getToppings(){
        return this.toppings;
    }

    setToppings(newTopping){
        this.toppings.push(newTopping);
    }
    get pizzaCrust(){
        return this.pizzaCrust;
    }

    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }   
    // we dont have to use the function keyword inside classes to make methods
    bake(){
        console.log(`Baking the ${this.type} pizza with size = ${this.size} and crust = ${this.crust}`);
    }
}

const ourPizza = new Pizza("corn");
ourPizza.bake();
// directly logging some property of the object
console.log(ourPizza.type);
// changing the property value, but we don't want it to be happening like this so we create getter and setter function
ourPizza.size = "smol";
// using the get set function to set the value
ourPizza.pizzaCrust = "cant be done by putting in brackets";
console.log(ourPizza.crust);
// but another way for this can be to make a function only wihout set and get and name it getCrust setCrust, so that we can call it like a function and can pass the things in parameters, that makes it more readable


