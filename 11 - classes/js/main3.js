// but even with those underscore they cn still be accessed directly so we create objects in differnt way to solve that problem 
// we are going to use a factory function that is another way to create an object in java script and this kinda provides us with objects with private things
// `` are called template literal

function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return{
        // no this.size etc...
        bake: () => console.log(`We're baking a ${size} size ${crust} crust pizza! `)
    };
}

// pizzaFactory returns an object  
const myPizza = pizzaFactory("small");
myPizza.bake();