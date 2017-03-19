$(document).ready(function(){
//test console
  // console.log($);

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

  //set timer
  var seconds = 0;
  var clockId;

  //player should be able to hit the start button ONLY to start Simon game
  //once the game has started user should be able to see one random petal light up

  //event listener for start button to initialize first sequence when pressed
  $("#start").click(function (){
      console.log("simon is on");

    //start timer
    function updateClock(){
      seconds++;
      $("#clock").html(seconds);
    }

    clockId = setInterval(updateClock, 1000);

    //pause timer
    $("#pause").click(function() {
      clearInterval(clockId);
    });


      simonSequence = [];
      playerSequence = [];


  //random petal selection sequence
    var sequenceArray = [0, 1, 2, 3];
      console.log("sequence is up");
    var randomNum = sequenceArray[Math.floor(Math.random() * 4)];
    switch(randomNum){
      case 0:
        $("#red").fadeOut(1000).fadeIn(1000) && audio[1].play();
        break;
      case 1:
        $("#blue").fadeOut(1000).fadeIn(1000) && audio[2].play();
        break;
      case 2:
        $("#green").fadeOut(1000).fadeIn(1000) && audio[3].play();
        break;
      case 3:
        $("#yellow").fadeOut(1000).fadeIn(1000) && audio[4].play();
        break;
      default:
        break;
   }


 });

 //after the random petal lights up, user should be able to click on the same petal triggering a response
 //responses: 1) same pattern, the game continues; 2) incorrect pattern, the game ends
 function continueGame() {
   if (simonSequence.length == playerSequence.length) {
     console.log("clicked");
     var nextPetal = function addNextPetal() {
       simonSequence.push([Math.floor(Math.random() * 4)]);
       console.log("new sequence added!")
       //display the sequence to player
       $("#petal").html(petalSequence);
     }
   } else {
       alert("INCORRECT, GAME OVER!") && audioIncorrect.play();
   }
 //for each correct response the game should be able to repeat the previous correct pattern with AN ADDITIONAL pattern/color
   var petalSequence = function petalSequence(){
     for (var i = 0; i < simonSequence.length; i++){
       console.log("sequence running!")

     }

   }
 }

}); //end of document ready



//player should be able to click on pause button to pause game
//player should be able to click twice to continue game
//upon completion of level, the game should restart
