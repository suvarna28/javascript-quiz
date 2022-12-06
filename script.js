var startButton = document.getElementById('start');
var intro = document.getElementById('intro');
var timeRemaining = document.getElementById('timeRemaining');
var dataTypes = document.getElementById('dataTypes');
var conditions = document.getElementById('conditions');
var arrays = document.getElementById('arrays');
var strings = document.getElementById('strings');
var tools = document.getElementById('tools');
var correct = document.getElementById('correct');
var wrong = document.getElementById('wrong');
var timerCount = 75;
var allDone = document.getElementById('alldone');
var scoresList = document.getElementById('scoresList');
var submitButton = document.getElementById('submit');
var initialsEntered = document.getElementById('initials');
var goBack = document.getElementById('goback');
var clearScores = document.getElementById('clearscores');
var viewFinalScores = document.getElementById('viewfinalscores');
var hideFinalScores = document.getElementById('hidefinalscores');

/* Function that gets called when the start button is clicked */

function startQuiz(){
    timeRemaining.textContent = 75;
    timerCount = 75; 
    startTimer();
    dataTypesQuestion();   
}

/* Start timer */

function startTimer() {
    timeLeft = setInterval(function() {
      timerCount--;
      timeRemaining.textContent = timerCount;
      if (timerCount === 0){
        intro.style = 'display:none';  
        dataTypes.style = 'display:none';  
        conditions.style = 'display:none';  
        arrays.style = 'display:none';  
        tools.style = 'display:none';  
        allDone.style = 'display:show'; 
        submitButton.addEventListener("click", highScore);
        clearInterval(timeLeft);
      }
    }, 1000); 
}

/* First question of the quiz and it's related logic when respective buttons are clicked */

function dataTypesQuestion(){
    dataTypes.style = 'display:show';
    intro.style = 'display:none';   
    if(dataTypes.checkVisibility() == true) {
        document.getElementById("strings").addEventListener("click", wrongAnswer)
        document.getElementById("booleans1").addEventListener("click", wrongAnswer)
        document.getElementById("alerts").addEventListener("click", correctAnswer)
        document.getElementById("numbers").addEventListener("click", wrongAnswer)            
    }
    document.addEventListener("click", function(e){   
        if((e.target.id === "strings") || (e.target.id === "booleans1") || (e.target.id === "alerts") || (e.target.id === "numbers") ){
            conditionQuestion();
        }
    })     
}
     
/* Second question of the quiz and it's related logic when respective buttons are clicked */

function conditionQuestion(){
    dataTypes.style = 'display:none';
    conditions.style = 'display:show';
    if(conditions.checkVisibility() == true) {
        document.getElementById("quotes").addEventListener("click", wrongAnswer)
        document.getElementById("curlybrackets").addEventListener("click", wrongAnswer)
        document.getElementById("parentheses1").addEventListener("click", correctAnswer)
        document.getElementById("squarebrackets").addEventListener("click", wrongAnswer) 
    }  
    document.addEventListener("click", function(e){   
        if((e.target.id === "quotes") || (e.target.id === "curlybrackets") || (e.target.id === "parentheses1") || (e.target.id === "squarebrackets") ){
            arraysQuestion();
        }
    })
}

/* Third question of the quiz and it's related logic when respective buttons are clicked */

function arraysQuestion(){
    conditions.style = 'display:none';
    arrays.style = 'display:show';
    if(arrays.checkVisibility() == true) {
        document.getElementById("numbersstrings").addEventListener("click", wrongAnswer)
        document.getElementById("otherarrays").addEventListener("click", wrongAnswer)
        document.getElementById("booleans2").addEventListener("click", wrongAnswer)
        document.getElementById("allabove").addEventListener("click", correctAnswer) 
    }  
    document.addEventListener("click", function(e){  
        if((e.target.id === "numbersstrings") || (e.target.id === "otherarrays") || (e.target.id === "booleans2") || (e.target.id === "allabove") ){
            toolsQuestion();
        }
    })
}

/* Fourth question of the quiz and it's related logic when respective buttons are clicked */

function toolsQuestion(){
    arrays.style = 'display:none';
    tools.style = 'display:show';
    if(tools.checkVisibility() == true) {
        document.getElementById("JavaScript").addEventListener("click", wrongAnswer)
        document.getElementById("terminalbash").addEventListener("click", wrongAnswer)
        document.getElementById("forloops").addEventListener("click", wrongAnswer)
        document.getElementById("consolelog").addEventListener("click", correctAnswer) 
    }  
    document.addEventListener("click", function(e){   
        if((e.target.id === "JavaScript") || (e.target.id === "terminalbash") || (e.target.id === "forloops") || (e.target.id === "consolelog") ){
            finalScore();
        }
    })
}

/* Function that shows up "All Done" section when all questions are answered and calls in finalScore function */

function finalScore(){
    tools.style = 'display:none';
    allDone.style = 'display:show';
    document.getElementById("showScore").textContent = timerCount;
    submitButton.addEventListener("click", highScore);
    clearInterval(timeLeft);
}

/* Function that saves all the scores and displays all the scores based on what buttons the user clicks */

function highScore(){
    wrong.style = "display:none";
    correct.style = "display:none";
    allDone.style = 'display:none';
    scoresList.style = 'display:show';
    var finalList = {
        nameInitials: document.getElementById("initials").value,
        score: document.getElementById("showScore").textContent
    }
    var initialsArray = []; 
    initialsArray.push(finalList);
    localStorage.setItem("initialsArray", JSON.stringify(initialsArray));
    initialsArray = JSON.parse(localStorage.getItem("initialsArray"));

    if (initialsArray !== null) {   
        for(var i = 0; i<initialsArray.length; i++){
            var p = document.createElement("p");
            p.innerText = initialsArray[i].nameInitials + " " + initialsArray[i].score;
            document.getElementById("showList").appendChild(p);
        }   
    }
    goBack.addEventListener("click", function () { 
        document.getElementById("showFinalScores").style = 'display:none';
        intro.style = 'display:show';
        scoresList.style = 'display:none';
        timeRemaining.textContent = 75;
    })
    clearScores.addEventListener("click", function () { 
        document.getElementById("showFinalScores").style = 'display:none';
        document.getElementById("showList").textContent = "";
    })
    viewFinalScores.addEventListener("click", function () { 
        document.getElementById("showFinalScores").style = 'display:show';
        for(var i = 0; i<initialsArray.length; i++){
            var p = document.createElement("p");
            p.innerText = initialsArray[i].nameInitials + " " + initialsArray[i].score;
            document.getElementById("showFinalScores").appendChild(p);
        }   
        initialsArray = [];
    })
    hideFinalScores.addEventListener("click", function () { 
        document.getElementById("showFinalScores").style = 'display:none';
    })
}

/* Function that displays the text "Correct" on the screen if the answer is correct */

function correctAnswer(){
    wrong.style = "display:none";
    correct.style = "display:none";
    correct.style = "display:show";
}

/* Function that displays the text "Wrong" on the screen if the answer is wrong */

function wrongAnswer(){
    wrong.style = "display:none";
    correct.style = "display:none";
    wrong.style = "display:show";
    timeRemaining.textContent = timeRemaining.textContent - 10;
    timerCount = timeRemaining.textContent;
}

/* Start of the quiz, start button is clicked and startQuiz function is called */

startButton.addEventListener("click", startQuiz); 

