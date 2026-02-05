let data = [
    { firstname: "Steen" , lastname: "Sikkert" } , { firstname: "Ole" , lastname: "Olesen"  } ,
]

const mainDOM = document.querySelector("main");

// console.log(mainDOM);

const uIDOM = document.createElement("ul");

data.forEach( (names) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = names.firstname;
    uIDOM.append(liDOM);
    console.log(liDOM);
})    

let retData = data.map( (names) => {
    let myNameDom = /* html */ `<li> ${names.firstname} ${names.lastname} </li>`;
    return myNameDom;
} ).join(" ");
mainDOM.append(ulDOM);
mainDOM.insertAdjacentHTML("afterbegin", retData);

// console.log(retData);

// mainDOM.append(uIDOM);