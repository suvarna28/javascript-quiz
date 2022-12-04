var datatypes = document.getElementById('dataTypes');
var correct = document.getElementById('correct');
var startButton = document.getElementById('start');
var timeRemaining = document.getElementById('timeRemaining');
var timer = 75;

datatypes.addEventListener("click", function() {
    var buttonValue = event.target;
    if(buttonValue.value == "alerts"){
        console.log("clicked")
        correct.style = "display:show";
    }
}) 

function startQuiz(){
    
    timeLeft = setInterval( function() {
        timer--;
        timeRemaining.textContent = timer;
    }, 1000);

}

startButton.addEventListener("click", startQuiz); 

