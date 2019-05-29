var score = 0;
var randomNum = randomNumGenerator(1, 100);
$("#randomNumber").text(randomNum)

// var randomNumber = Math.floor((Math.random() * 100) + 1);
// // var x = Math.floor((Math.random() * 100) + 1);
// //document.getElementById("randomNumber").innerHTML = x;
// $("#randomNumber").text(randomNumber);

// set up function for random numbers generation  
function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * max) + min;
}

// set a random number for each gem
for (var i = 0; i < $(".gems").length; i++) {
    var gemNum = randomNumGenerator(1, 12);
    $("button-" + i).val(gemNum);
}

// reset the game and assign a new random number between 1 and 100
function resetGame() {
    randomNum = Math.floor(Math.random() * 100) + 1;
    // display on the page
    $("#randomNumber").text(randomNum);
    // reset the score to 0
    score = 0;
    // display the new score on the page
    $("#score").text(score);

// setting the gems with random numbers
    for (var i = 0; i < $(".gems").length; i++) {
        var gemNum = randomNumGenerator(1, 12);
        $("button-" + i).val(gemNum);
    }
}

// when the user clicks on the gems 
$(".gems").on("click", function () {
    $("#score").text("");
    var btnVal = parseInt($(this).val());
    // console.log(btnVal);
    score = score +btnVal;
    $("#wins-num").text(score);
    $("#losses-num").text(score);


    // check if the score matches the random number
    if (score === randomNum) {
        // alert("You won!")
        $("#score").text("🏆 You won! 🏆")
        resetGame();

    } else if (score > randomNum) {
        $("#score").text("😿 You lost! 😿")
        resetGame();
    }
});




