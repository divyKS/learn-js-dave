// Document Object Model
const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2"); // query can select other things than id too, here we have to specify that it is an ID by putting '#' 
console.log(view2);

view1.style.display = "flex";
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameView = document.querySelectorAll(".view"); // again have to specify with . that it is a class, but unlike above it gives a node list, nodes can be anything, simple text, whtiespaces etc. but above we get html elements which are less than nodes
console.log(sameView);

const divs = view1.querySelectorAll("div"); // we didn't do document. we are not looking in whole document, we are looking inside view1 only, this gives us a node list
console.log(divs);
const sameDivs = view1.getElementsByTagName("div"); // this gives a html collection
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); // being even more specfic and slecting on the even divs
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "I have changed this!"; // we changed the text node here and didn't add any html to the page

const navBar = document.querySelector("nav");
console.log(navBar);
navBar.innerHTML = `<h1>Hello!</h1> <p>Aligning to right due to the css is such that</p>`;

//navigating the dom tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes); // not just the tags
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = "none";
view2.style.flexWrap = "wrap"; // the css properties in javascript do not have - they now turn to camel case

//to remove all elements from the page
// while view2 has a last child
while(view2.lastChild){
    view2.lastChild.remove(); // we are not removing just element we are removes nodes
}

function createDivs(parent, value){
    const newDiv = document.createElement("div");
    newDiv.textContent = value;
    newDiv.style.backgroundColor = "black";
    newDiv.style.width = "120px";
    newDiv.style.height = "120px";
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}

for(let i = 1; i <= 10; i++){
    createDivs(view2, i);
}