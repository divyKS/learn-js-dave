document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("READY STTE COMPLETE. THE PAGE I READY/LOADED for DOM types.");
        initApp();
    }
});

const initApp = () => {
    const page1 = document.querySelector("#view1");
    page1.style.display = "none";
    const view = document.querySelector("#view2");
    const div = view.querySelector("div"); 
    const h2 = view.querySelector("h2");
    view.style.display = "flex";
    view.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "yellow";
    }, false);
    div.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "orange";
    }, false);
    h2.addEventListener("click", (event)=>{
        event.target.textContent = "blue"; 
    }, false);

    // in h2 we have chosen event.target, but the div works with the div and the view works with the view again not with the event target
    // but if we repalce the div and the view with the event.target then when we click the h2 all those above styles will get applied to the h2 only, because it was the event.target and then event bubbling happened 
    // so the event listener will work on what the event target is
}

