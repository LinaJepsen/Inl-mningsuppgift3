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

//Right answers 
/*

let answers = [
    {
        rightAnswer1: true,
        wrongAnswer1: true
        
    },
    {
        rightAnswer2: true,
        wrongAnswer2: true
        
    },
    {
        rightAnswer3: true
    },
    {
        rightAnswer4: "Malcolm Wheeler-Nicholson"
    },
    {
        rightAnswer5: "Superman"
    },
    {
        rightAnswer6: "Selina Kyle"
    },
    {
        rightAnswer7: "Batboat",
        rightAnswer7: "Batcycle",
        rightAnswer7: "Batmobile"
    }
];*/

//collect answers

let submitBtn = document.querySelector("#resultBtn");
let result = document.querySelector("#results");
let inputValue = document.querySelectorAll("input[name = 'quest1']");

let rightAnswers = [];
let wrongAnswers = [];

function quest1 () {
    let flashTrue = document.getElementById("flashTrue");
    let flashFalse = document.getElementById("flashFalse");

    if (flashTrue.checked == true){
        rightAnswers.push(1);
    }
    else if (flashFalse.checked == true){
        wrongAnswers.push(1);
    }
    else 
    alert("Please answer all questions!");
}

function quest2 () {
    let spidermanTrue = document.getElementById("spidermanTrue");
    let spidermanFalse = document.getElementById("spidermanFalse");

    if (spidermanTrue.checked == true)
    wrongAnswers.push(1);
    else if (spidermanFalse.checked == true)
    rightAnswers.push(1);
    else
    alert("Please answer all questions!")
}

function quest3 () {
    let aquamanTrue = document.getElementById("aquamanTrue");
    let aquamanFalse = document.getElementById("aquamanFalse");

    if (aquamanTrue.checked == true)
    rightAnswers.push(1);
    else if (aquamanFalse.checked == true)
    wrongAnswers.push(1);
    else
    alert("Please answer all questions!");
}

function quest4 () {
    let founder1 = document.getElementById("founder1");
    let founder2 = document.getElementById("founder2");
    let founder3 = document.getElementById("founder3");

    if (founder1.checked == true || founder3.checked == true)
    wrongAnswers.push(1);
    else if ( founder2.checked == true)
    rightAnswers.push(1);
    else 
    alert ("Please answer all questions!")
}

function quest5 () {
    let choice1 = document.getElementById("choice1");
    let choice2 = document.getElementById("choice2");
    let choice3 = document.getElementById("choice3");

    if (choice1.checked == true)
    rightAnswers.push(1);
    else if (choice2.checked == true || choice3.checked == true)
    wrongAnswers.push(1);
    else 
    alert("Please answer all questions!")
}

function quest6 () {
    let catwoman1 = document.getElementById("catwoman1");
    let catwoman2 = document.getElementById("catwoman2");
    let catwoman3 = document.getElementById("catwoman3");

    if (catwoman2.checked == true)
    rightAnswers.push(1);
    else if (catwoman1.checked == true || catwoman3.checked == true)
    wrongAnswers.push(1);
    else 
    alert("Please answer all questions!")
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

submitBtn.addEventListener("click", () =>{
    quest1()
    quest2()
    quest3()
    quest4()
    quest5()
    quest6()
    quest7()
    console.log(rightAnswers);
    console.log(wrongAnswers);
});

/* Denna funkar på ett svar

submitBtn.addEventListener("click", () =>{
    let answerFilter = "";
    inputValue.forEach((btn)=>{
        if(btn.checked){
            //result.innerHTML = "<p>You choosed " + btn.value + "</p>"
            answerFilter = btn.value;
            //console.log(btn);
        } 
    });

    let userAnswers = []; //tom array med rätt svar
    let wrongAnswers = []; //tom array med fel

    if(answerFilter === "true"){
        userAnswers = answers.filter((item) => item.rightAnswer1 === true);
    } else if (answerFilter === "false"){
        wrongAnswers = answers.filter((item)=> item.wrongAnswer1 === true);
    }

    userAnswers.forEach((item)=>{
        console.log(userAnswers);
        result.innerHTML = "<p>You got " + userAnswers.length + " points out of 7 </p>"
    });
    wrongAnswers.forEach((item) =>{
        console.log(wrongAnswers);
        result.innerHTML = "<p>you got " + wrongAnswers.length + " minus points</p>"
    })
    
});*/
/*
Test 2 - funkar inte riktigt med på god väg
let correct;
let wrong;

let getAnswers = () =>{
    var input = document.getElementsByTagName("input")
    for (var i=0; i<input.length; i++){
        if (input[i].value==="correct"){
            if(input[i].checked===true){
                correct++;
            }
        } else (input[i].value === "wrong")
        if(input[i].checked === true){
            wrong++;
        }
        
        
       // if(i==input.length)correct = 0;
        
    }
    if (correct === 7) {
        console.log("100%")
    } else if (correct >= 5 && correct < 7){
        console.log("You got 50%")
    } else (correct < 5)
    console.log("you got less than 50%")
};

submitBtn.addEventListener("click",() =>{
    getAnswers();
})*/

/* Denna funkar, ränkar antal rätt svar i consolen, men förstår ej riktigt. 
Array.from(document.querySelectorAll('input[type = radio]')).forEach(item=>{
    item.addEventListener("click", e =>{
        let correct = document.querySelectorAll('input[type=radio][value=correct]:checked').length
        console.log(correct)
    })
})*/






/*let resultBtn = document.querySelector("#resultBtn");
resultBtn.addEventListener("click",()=>{
    let checkAnswers = () => {
        var inputValue = document.querySelectorAll("[name = 'quest1']").value;
        var correctAnswer = "true";
    
        if (inputValue === correctAnswer){
            console.log("true");
        } else {
            console.log("false");
        }
    }
});*/

/*let checkAnswers = () => {
   
        if (inputValue === answers.rightAnswer1){
            console.log("true");
           
        } else (inputValue !== answers.rightAnswer1)
        console.log("false");
    
}

submitBtn.addEventListener("click", () =>{
    checkAnswers();

});*/




