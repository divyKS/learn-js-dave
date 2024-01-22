document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("READY STTE COMPLETE. THE PAGE I READY/LOADED for DOM types.");
        initApp();
    }
});

const initApp = () => {
    {
        const page1 = document.querySelector("#view1");
        page1.style.display = "none";
        const page2 = document.querySelector("#view2");
        page2.style.display = "none";
    }

    const view3 = document.querySelector("#view3");
    view3.style.display = "flex";

    const myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", (event)=>{
        // so to remove that default thing we will have to use below
        event.preventDefault();
        console.log("Submit button clicked!"); // by default on submitting the page reloads so this message would only flash 
    }, false);
}