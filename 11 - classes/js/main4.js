// THIS  DOESN'T HAVE MUCH WIDE SPREAD USE BY BROWSERS BECAUSE IT WAS ADDED RECENTLY

class Pizza{
    // this is a public field,  anything tht we are going to assign directly and want to be public we do that here
    crust = "original";
    // this is a private field
    #sauce = "red chilli";
    #size;
    constructor(pizzaSize){
        // to indicate that these vriables are private and that they should not be accessed directly so we add an underscore 
        this.#size = pizzaSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustChoice){
        this.crust = crustChoice;
    }
    hereYouGo(){
        console.log(`I am using a private thing -> ${this.#sauce}`);
    }
}

const obj = new Pizza("INFINITE");
obj.hereYouGo();

// we still access the private field without the #
console.log(obj.sauce);