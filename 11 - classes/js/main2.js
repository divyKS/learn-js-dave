class Pizza{
    constructor(pizzaSize){
        // to indicate that these vriables are private and that they should not be accessed directly so we add an underscore 
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust(){
        return this._crust;
    }
    setCrust(crustChoice){
        this._crust = crustChoice;
    }
}

class SpecialPizza extends Pizza{
    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const specialPizzaObject = new SpecialPizza("small");
specialPizzaObject.slice();

