// Callbacks are functions that are passed to other functions as parameters

function firstFunction(name, age, callback){
    // this function would do something with the parameters and then call the callback function. This is like a chain of events.
    // promises are desgined to get rid of this as it causes some problems
    callback();
}

// problem - callback hell, the code gets harder to follow as it grows 
// that is an anonymous function
firstFunction("divy", 85, function(){
    // do something and then call another 
    secondFunction("me", 4, function(){
        // do something more 
        thirdFunction();
    });
});
