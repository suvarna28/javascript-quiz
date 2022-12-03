var datatypes = document.getElementById('datatypes');
var correct = document.getElementById('correct');

datatypes.addEventListener("click", function() {
    var buttonValue = event.target;
    if(buttonValue.value == "alerts"){
        console.log("clicked")
        correct.style = "display:show";
    }
}) 