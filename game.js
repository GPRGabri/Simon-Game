// colors of game
var buttonColours = ['green', 'red', 'yellow', 'blue'];

//where the sequence will be stored
var gamePattern = [];

var userClickedPattern = []; 

var level = 0 ;

//game status
var started = false;
$(".btn").css("pointer-events", "none");

//Keypress to start game
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
      $(".btn").css("pointer-events", "auto");
    }
  });

  //ckick event

  $(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    });





function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
        
        console.log("wrong");
        $(".btn").css("pointer-events", "none");
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        started = false;

        $('body').addClass("game-over");
        setTimeout(function () {
            $('body').removeClass("game-over");
          }, 200);

          startOver();

          
      }
  
  }



//click effect
function animatePress(currentColour){
$('#'+ currentColour).addClass("pressed");
setTimeout(function () {
    $('#' + currentColour).removeClass("pressed");
  }, 100);
}


//sound function
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//game step
function nextSequence(){
    userClickedPattern = [];
    level++;  //increment lvl
    $("#level-title").text("Level " + level);  // change the lvl on h1 
    var randomNumber= Math.random();
    randomNumber*=3;
    randomNumber = Math.floor(randomNumber)+1; //random number
    var randomChosenColour = buttonColours[randomNumber]; //pick color by number
    gamePattern.push(randomChosenColour); // add on array the gamepattern
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); // give a visual to choosen color.
    playSound(randomChosenColour); // play sound


} 


function startOver(){
    gamePattern = [];
    level=0;
    stared = false;


}














