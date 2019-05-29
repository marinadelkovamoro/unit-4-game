var score = 0;
var randomNum = randomNumGenerator(1, 100);
$("#randomNumber").text(randomNum)
var losses = 0;
var wins = 0;
var btnVal = 0;

// set up function for random numbers generation  
function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * max) + min;
}


// when the user clicks on the gems 
$(".gems").on("click", function () {
    btnVal = parseInt($(this).val());
    console.log(btnVal);
    score = score + btnVal;
    $("#score").text(score);

    // check if the score matches the random number
    if (score === randomNum) {
        // alert("You won!")
        wins++;
        alert("🏆 You won! 🏆");
        $("#wins-num").text(wins);
        resetGame();

    } else if (score > randomNum) {
        // alert("You lost!")
        losses++;
        alert("😿 You lost! 😿");
        $("#losses-num").text(losses);
        resetGame();
    }
});
    // reset the game and assign a new random number between 1 and 100
    function resetGame() {
        
        randomNum = randomNumGenerator(1, 100);
        // display on the page
        $("#randomNumber").text(randomNum);
        // reset the score to 0
        score = 0;
        // display the new score on the page
        $("#score").text(score);

        // setting the gems with NEW random numbers
        for (var i = 0; i <= $(".gems").length; i++) {
            var gemNum = randomNumGenerator(1, 12);
            $("#button-" + i).val(gemNum);
        }
    }


// call resetGame function when the page reload
resetGame();




