var buttonColors = ["red", "green", "blue", "yellow"];
var number = Math.floor(Math.random() * 4);
var randomChosenColour = buttonColors[number];
var gamePattern = [];

userClickedPattern = [];

var level = 0;
var start = false;

$(document).keydown(function() {
  if (!start) {
    $("h1").text("Level" + level);
    nextSequence();
    start = true;
  }
});

function nextSequence() {
userClickedPattern = [];
  level++;

  $("h1").text("Level" + " " + level);
  var buttonColors = ["red", "green", "blue", "yellow"];
  var number = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[number];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn();
  playSound(randomChosenColour);





}





$(".btn").on("click", function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


function playSound(name) {

  var blue = new Audio("sounds/" + name + ".mp3");
  blue.play();
}


function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length) {

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function() {
        nextSequence();
      }, 1000);

    }

  } else {

    var wrong = new Audio("sounds/wrong.mp3");

    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    console.log("wrong");
$("h1").text("Game Over, Press Any Key to Restart");
startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
}
$("h1").on("mouseover", function() {

  $("h1").css("color", "purple");

});
