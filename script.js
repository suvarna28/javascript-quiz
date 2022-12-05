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
var scores = document.getElementById('scores');
var submitButton = document.getElementById('submit');
var initialsEntered = document.getElementById('initials');
var goBack = document.getElementById('goback');
var clearScores = document.getElementById('clearscores');
var finalList;


function startQuiz(){
    timeRemaining.textContent = 75;
    timerCount = 75;
    startTimer();
    dataTypesQuestion();   
}

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
        clearInterval(timeLeft);
      }
    }, 1000); 
}


function dataTypesQuestion(){
    dataTypes.style = 'display:show';
    intro.style = 'display:none';   
    if(dataTypes.checkVisibility() == true) {
        document.getElementById("strings").addEventListener("click", wrongAnswer)
        document.getElementById("booleans").addEventListener("click", wrongAnswer)
        document.getElementById("alerts").addEventListener("click", correctAnswer)
        document.getElementById("numbers").addEventListener("click", wrongAnswer)            
    }
    document.addEventListener("click", function(e){   
        if((e.target.id === "strings") || (e.target.id === "booleans") || (e.target.id === "alerts") || (e.target.id === "numbers") ){
            conditionQuestion();
        }
    })     
}
        
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

function arraysQuestion(){
    conditions.style = 'display:none';
    arrays.style = 'display:show';
    if(arrays.checkVisibility() == true) {
        document.getElementById("numbersstrings").addEventListener("click", wrongAnswer)
        document.getElementById("otherarrays").addEventListener("click", wrongAnswer)
        document.getElementById("booleans").addEventListener("click", wrongAnswer)
        document.getElementById("allabove").addEventListener("click", correctAnswer) 
    }  
    document.addEventListener("click", function(e){  
        if((e.target.id === "numbersstrings") || (e.target.id === "otherarrays") || (e.target.id === "booleans") || (e.target.id === "allabove") ){
            toolsQuestion();
        }
    })
}

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

function finalScore(){
    wrong.style = "display:none";
    correct.style = "display:none";
    tools.style = 'display:none';
    allDone.style = 'display:show';
    document.getElementById("score").textContent = timerCount;
    submitButton.addEventListener("click", highScore);
    clearInterval(timeLeft);
}

function highScore(){
    wrong.style = "display:none";
    correct.style = "display:none";
    allDone.style = 'display:none';
    scores.style = 'display:show';
    finalList = {
        nameInitials: document.getElementById("initials").value,
        score: document.getElementById("score").textContent
    }
    localStorage.setItem("finalList", JSON.stringify(finalList));
    if (finalList !== null) {
        document.getElementById("showList").textContent = "1: " + finalList.nameInitials + "    " + finalList.score
    }
    goBack.addEventListener("click", function () { 
        intro.style = 'display:show';
        scores.style = 'display:none';
        timeRemaining.textContent = 75;
    })
    clearScores.addEventListener("click", function () { 
        document.getElementById("showList").textContent = "";
    })
}

function correctAnswer(){
    wrong.style = "display:none";
    correct.style = "display:none";
    correct.style = "display:show";
}

function wrongAnswer(){
    wrong.style = "display:none";
    correct.style = "display:none";
    wrong.style = "display:show";
    timeRemaining.textContent = timeRemaining.textContent - 10;
    timerCount = timeRemaining.textContent;
}

startButton.addEventListener("click", startQuiz); 

// function stringsQuestion(){
//     arrays.style = 'display:none';
//     strings.style = 'display:show';
    
//     console.log("Here");

//     if(strings.checkVisibility() == true) {
//         document.getElementById("commas").addEventListener("click", wrongAnswer)
//         document.getElementById("curlybrackets").addEventListener("click", wrongAnswer)
//         document.getElementById("quotes").addEventListener("click", correctAnswer)
//         document.getElementById("parentheses2").addEventListener("click", wrongAnswer) 
//     }  

//     document.addEventListener("click", function(e){   
//         if((e.target.id === "commas") || (e.target.id === "curlybrackets") || (e.target.id === "quotes") || (e.target.id === "parentheses2") ){
//             toolsQuestion();
//         }
//     })
// }