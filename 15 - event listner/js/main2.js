// event that makes it safer to intereact with dom when we load the page

document.addEventListener("readystatechange", (event)=>{
    //here even.target is the document itself 
    if(event.target.readyState === "complete"){
        console.log("READY STTE COMPLETE. THE PAGE I READY/LOADED for DOM types.");
        initApp();
    }
});

const initApp = () => {
    const page1 = document.querySelector("#view1");
    page1.style.display = "none";
    const view = document.querySelector("#view2");
    const div = view.querySelector("div"); // have to be slected of the view 
    const h2 = view.querySelector("h2");
    view.style.display = "flex";
    view.addEventListener("click", (event)=>{
        event.stopPropagation();
        view.style.backgroundColor = "yellow";
    }, true);
    div.addEventListener("click", (event)=>{
        div.style.backgroundColor = "orange";
    }, true);
    h2.addEventListener("click", (event)=>{
        event.target.textContent = "blue"; 
    }, true);
    // we didn't put the third field of useCapture and when we just clicked h2 everything changed, this is something called event bubbling
    // we clicked h2 so the vent bubled up and changed the div, the div then bubbled up and changes the bgc of view because its inside view 
    // this happened because of not using useCapture or it being false, useCapture being true works outside in so if we click h2 the events go from view to div to h2, so if we click h2  and stop propogation in view it doesnt gog after than and onlny the view is changed
    // and if we use stop Propogation when useCapture is false in h2 and click h2 then only h2 ill be changes the div and view wil not be changed since in false the events bubble out

   


}

