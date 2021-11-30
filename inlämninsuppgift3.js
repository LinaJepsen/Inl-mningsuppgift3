//change colors of the document
let darkMode = document.querySelector("#darkMode");
let lightMode = document.querySelector("#lightMode");
let normalMode = document.querySelector("#normalMode");
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
    DCQuiz.style.color ="#F9F762";
    DCQuiz.style.borderBottom = "yellow solid";
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
    DCQuiz.style.borderBottom = "red solid";
});

normalMode.addEventListener("click", () =>{
    body.style.backgroundColor = "#FFFFFF";
    let changeColor = document.querySelectorAll("h3");
    changeColor.forEach((h3)=>{
        h3.style.color = "#000000";
    });
    text.forEach((div)=>{
        div.style.color = "#000000"
    });
    DCQuiz.style.color ="#000000"
    DCQuiz.style.borderBottom = "black solid";
});

//functions for all answers

let submitBtn = document.querySelector("#resultBtn");
let result = document.querySelector("#results");

let rightAnswers = []; //empty array for right answers
let wrongAnswers = []; //empty array for wrong answers

function quest1 () {
    let flashTrue = document.getElementById("flashTrue");
    let flashFalse = document.getElementById("flashFalse");

    if (flashTrue.checked == true){
        rightAnswers.push(1);
    }
    else if (flashFalse.checked == true){
        wrongAnswers.push(1);
    }
    
}

function quest2 () {
    let spidermanTrue = document.getElementById("spidermanTrue");
    let spidermanFalse = document.getElementById("spidermanFalse");

    if (spidermanTrue.checked == true)
    wrongAnswers.push(1);
    else if (spidermanFalse.checked == true)
    rightAnswers.push(1);
    
}

function quest3 () {
    let aquamanTrue = document.getElementById("aquamanTrue");
    let aquamanFalse = document.getElementById("aquamanFalse");

    if (aquamanTrue.checked == true)
    rightAnswers.push(1);
    else if (aquamanFalse.checked == true)
    wrongAnswers.push(1);
    
}

function quest4 () {
    let founder1 = document.getElementById("founder1");
    let founder2 = document.getElementById("founder2");
    let founder3 = document.getElementById("founder3");

    if (founder1.checked == true || founder3.checked == true)
    wrongAnswers.push(1);
    else if ( founder2.checked == true)
    rightAnswers.push(1);
  
}

function quest5 () {
    let choice1 = document.getElementById("choice1");
    let choice2 = document.getElementById("choice2");
    let choice3 = document.getElementById("choice3");

    if (choice1.checked == true)
    rightAnswers.push(1);
    else if (choice2.checked == true || choice3.checked == true)
    wrongAnswers.push(1);
    
}

function quest6 () {
    let catwoman1 = document.getElementById("catwoman1");
    let catwoman2 = document.getElementById("catwoman2");
    let catwoman3 = document.getElementById("catwoman3");

    if (catwoman2.checked == true)
    rightAnswers.push(1);
    else if (catwoman1.checked == true || catwoman3.checked == true)
    wrongAnswers.push(1);
    
}

function quest7 () {
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");

    if (check1.checked == true && check2.checked == true && check4.checked == true)
    rightAnswers.push(1);
    else 
        wrongAnswers.push(1);
}

//get the result
submitBtn.addEventListener("click", () =>{
    
        quest1()
        quest2()
        quest3()
        quest4()
        quest5()
        quest6()
        quest7()
       
                if (rightAnswers.length == 7){
                    result.innerHTML = "<p>You got " + rightAnswers.length + " out of 7! You're a true DC-fan!</p>"
                    result.style.color = "green";
                } else if (rightAnswers.length >= 4 && rightAnswers.length < 7){
                    result.innerHTML = "<p>You got " + rightAnswers.length + " out of 7! You need to read more DC-comics!</p>"
                    result.style.color = "orange";
                } else if (rightAnswers.length < 4){
                    result.innerHTML = "<p>You got " + rightAnswers.length + " out of 7! Are you a Marvel-fan?</p>"
                    result.style.color = "red";
                }

                rightAnswers = []; 
                wrongAnswers = [];
});

//function and button to reload the page

let reload = document.querySelector("#reload");
function reloadPage () {
    window.location.reload();
}

reload.addEventListener("click", ()=>{
    reloadPage()
});







