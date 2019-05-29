var score = 0;
var targetNumber = Math.floor(Math.random() * 100) + 1;
$("#target-number").text(targetNumber)

var randomNumber = Math.floor((Math.random() * 100) + 1);
// var x = Math.floor((Math.random() * 100) + 1);
//document.getElementById("randomNumber").innerHTML = x;
$("#randomNumber").text(randomNumber);

$(".gems").on("click", function(){
    var btnVal = parseInt($(this).val());
    console.log(btnVal);

    // check if the score matches the target number, press
if (score === targetNumber)
alert("We won")
    // here is where all the wins and losses going to go
});

    // reset the game and assign a new number between 1 and 100
function resetGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    // display on the page
    $("#randomNumber").text(targetNumber);
    // reset the score to 0
    score=0;
    // display the new score on the page
    $("#score").text(score);
}