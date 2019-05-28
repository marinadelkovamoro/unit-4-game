var randomNumber = Math.floor((Math.random() * 100) + 1);
// var x = Math.floor((Math.random() * 100) + 1);
//document.getElementById("randomNumber").innerHTML = x;
$("#randomNumber").text(randomNumber);

$(".number").on("click", function(){
    var btnVal = parseInt($(this).val());
    console.log(btnVal);

    // here is where all the wins and losses going to go
});