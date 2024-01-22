// for export default inline we have a different syntax

// const playGuitar = ()=>{
//     return "Ting ting tring tring";
// }

export default function playGuitar(){
    return "Ting ting tring tring";
}

export const fingerstyle = ()=>{
    return "Andrew Misko";
}

export const acoustic = ()=>{
    return "Josephine";
}

// we can export these function for use in other js files. every file/modue can have one default export. we ca export in the below way or the above way of using inline with the function
// export default playGuitar;
// export{fingerstyle, acoustic};
