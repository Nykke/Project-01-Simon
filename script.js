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

  function animatePetal(){
  //random petal selection sequence
  var randomColor = sequenceArray[Math.floor(Math.random() * sequenceArray.length)];
  switch(randomColor){
    case "red":
    $("#red").fadeOut(1000).fadeIn(1000);
    audio[1].play();
    break;
    case "blue":
    $("#blue").fadeOut(1000).fadeIn(1000);
    audio[2].play();
    break;
    case "green":
    $("#green").fadeOut(1000).fadeIn(1000);
    audio[3].play();
    break;
    case "yellow":
    $("#yellow").fadeOut(1000).fadeIn(1000);
    audio[4].play();
    break;
    default:
    break;
  }
  //simonSequence is stored
  simonSequence.push(randomColor);
  console.log(simonSequence);
}

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

    simonSequence = [];
    playerSequence = [];

    animatePetal();

  });

  //checks whose turn it is
  function sequenceCheck() {
    //computer's turn
    if (simonSequence.length === playerSequence.length){
      for(var i=0; i < simonSequence.length; i++){
        //checks for correct answer
        if (simonSequence[i] !== playerSequence[i]) {
          audioIncorrect.play();
          alert("INCORRECT, GAME OVER!");
          return;
        }
    }
    playerSequence = [];
    addNextPetal();
    animatePetal();
   }
}

//generate new value to push to simonSequence iff player's last choice equals the simonSequence's last value
  function addNextPetal() {
    var i=0;
      do {
        i > sequenceArray.length + i;
        i++;
      }
      while( i < 5);
      simonSequence.push(sequenceArray[Math.floor(Math.random() * sequenceArray.length)]);
    //show the player new color
    animatePetal();
  }



  function playerClick(){
    //push value of id to compare
    playerSequence.push($(this).attr("id"));
    console.log(playerSequence);
    //creates the fadeout/fadein on the petal when clicked by player
    $(this).fadeOut(700).fadeIn(700);
    sequenceCheck();
    animatePetal();
  }
  //playerClick is activated
  $(".petal").on("click", playerClick);


  //display the sequence to player
 function displayPetal(i){
   //make the dom flash the color
   if (i < simonSequence.length){
     (simonSequence[i]).fadeIn(8000).fadeOut(800);
     //set delay before playing next sequence
     setTimeout(function(){
       displayPetal(i +1);
     }, 3500);
   }
 }

}); //end of document
