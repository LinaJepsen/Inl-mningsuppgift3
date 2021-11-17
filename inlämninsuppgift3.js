//change colors of the document
let darkMode = document.querySelector("#darkMode");
let lightMode = document.querySelector("#lightMode");
let body = document.querySelector("body");
let DCQuiz = document.querySelector("h1");
let text = document.querySelectorAll("div");

darkMode.addEventListener("click", ()=>{
    body.style.backgroundColor = "#050504";
    let changeColor = document.querySelectorAll("h3");
    changeColor.forEach((h3)=>{
        h3.style.color = "#F9F762";
    });
    text.forEach((div)=>{
        div.style.color = "#F9F762"
    });
    DCQuiz.style.color ="#F9F762"
});

lightMode.addEventListener("click", () =>{
    body.style.backgroundColor = "#B4B4FF";
    let changeColor = document.querySelectorAll("h3");
    changeColor.forEach((h3)=>{
        h3.style.color = "#F53F36";
    });
    text.forEach((div)=>{
        div.style.color = "#F53F36"
    });
    DCQuiz.style.color ="#F53F36"
});

//question 1

questOne = document.querySelectorAll("[name= 'quest1']");

//get result
resultBtn = document.querySelector("#resultBtn");
