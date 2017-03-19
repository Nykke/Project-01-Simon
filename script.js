$(document).ready(function(){
//test console
  // console.log($);

//BRONZE
  //player should be able to hit the start button ONLY to start Simon game
  //once the game has started user should be able to see one random petal light up

  //event listener for start button to initialize first sequence when pressed
  $("#start").click(function (){
      console.log("simon is on");

  //random petal selection sequence
    var sequenceArray = [0, 1, 2, 3];
      console.log("sequence is up");
    var randomNum = sequenceArray[Math.floor(Math.random() * 4)];
    switch(randomNum){
      case 0:
        $("#red").fadeOut(1000).fadeIn(1000);
        break;
      case 1:
        $("#blue").fadeOut(1000).fadeIn(1000);
        break;
      case 2:
        $("#green").fadeOut(1000).fadeIn(1000);
        break;
      case 3:
        $("#yellow").fadeOut(1000).fadeIn(1000);
        break;
      default:
        break;
   }

    });

  //after the random petal lights up, user should be able to click on the same petal triggering a response
  //responses: 1) same pattern, the game continues; 2) incorrect pattern, the game ends
  petals.each(["red", "blue", "green", "yellow"], function (clickedPetal){


  });
  var clickedPetal = [];
    var simon = function play() {
      var times = 12;
        for (i = 0; i < 12; i++){
          return play;
        }
      };
       petals.push(clickedPetal);





}); //end of document ready


//after the random petal lights up, user should be able to click on the same petal triggering a response
//responses: 1) same pattern, the game continues; 2) incorrect pattern, the game ends
//for each correct response the game should be able to repeat the previous correct pattern with AN ADDITIONAL pattern/color
//player should be able to click on pause button to pause game
//player should be able to click twice to continue game
//upon completion of level, the game should restart

//SILVER
//the game should add a score of "5 points" for each correct pattern logged
//the game should add "20 points" for a successful completion of level
//the player should be able to see a timer
//player has a set time to complete each level
//petals of flowers should rotate when level is complete
//diplay tells player what their highest score was
