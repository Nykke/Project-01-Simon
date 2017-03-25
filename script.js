$(document).ready(function(){

  //audio
  var audio = [];
  audio[1] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
  audio[2] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  audio[3] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  audio[4] = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  var audioIncorrect = new Audio("https://www.dropbox.com/s/ud4fafa7uifk7ah/loseSimon.mp3?dl=1");

  //set game and player arrays
  var simonSequence = [];
  var playerSequence = [];

  //set sequence variables
  var sequenceArray = ["red", "blue", "yellow", "green"];

  //set timer
  var seconds = 0;
  var clockId;

  //player should be able to hit the start button ONLY to start Simon game
  //once the game has started user should be able to see one random petal light up
  $("#start").click(function(){

    //interval set for timer
    clockId = setInterval(updateClock, 1000);

    //start timer
    function updateClock(){
      seconds++;
      $("#clock").html(seconds);
    }



  });

});
