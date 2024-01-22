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
        // editing css this way is okay but its better to do so by using classes
        // this method we have to add remove manually and once removed we acnt go back so we can use toggle method, if purple is present it will remove purple, if it is absent it will add purple
        // view.classList.add("purple");
        // view.classList.remove("darkblue");
        // // so with toggle we can do like this and now it toggles live
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);
    div.addEventListener("click", (event)=>{
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    h2.addEventListener("click", (event)=>{
        const message = event.target.textContent;
        message === "My 2nd View" ? event.target.textContent = "Clicked" : event.target.textContent = "My 2nd View"; 
    }, false);
    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event)=>{
        event.target.classList.add("height100"); // toggle wont help because then we will have mouse over again and again for the nav bar to grow and shrink
    }, false);
    nav.addEventListener("mouseout", (event)=>{
        event.target.classList.remove("height100"); 
    }, false);
}

