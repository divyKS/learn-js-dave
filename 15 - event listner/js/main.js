//JS Event Listners

// before using DOM we have to ensure that it has loaded into the browser and is ready to use

const page1 = document.querySelector("#view1");
page1.style.display = "none";
const view = document.querySelector("#view2");
view.style.display = "flex";
console.log(view); // this showed null even though the element existed : in html file where we have written the script tag in head section, when it ran the element didnt even exist because its code is written afterwards, so to avoid this script tag is also wriiten at the end of the body tag , the newere way of doing this is to leave the script tag in the head section and add an attribute "defer" in the script tag

const div = view .querySelector("div");
const h2 = div.querySelector("h2");

// syntax to add event listner : addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("Yes! I'm doing something!");
}

h2.addEventListener("click", doSomething, false); // false is default in useCapture thing
h2.removeEventListener("click", doSomething, false); // removeEventListner can be used only if the function has some name, we cant use it with anonymous functions

// we can write anything in place of event
h2.addEventListener("click", (event)=>{ 
                                console.log(event.target); event.target.textContent = "Clicked";
                            }
                    ) // target is what we clicked
// we can do it without arrow functions too like by simply using function
// ("click", function(event){console.log("...");})


