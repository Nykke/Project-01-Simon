$(document).ready(function(){

//test console
  console.log("hello simon");
  console.log($);

  //set up variables
  var start = "start";
  var pause = "hold";
  var petal = ["red", "blue", "green", "yellow"];
  var scoreboard = 0;
  var clock = "00:00";
  var level = 1;



  //create an event listener for start button to initialize first sequence when pressed
  //create an if statement that states when start button is hit that a random sequence will start
    function animatePetal() {
      var ocapcity = 0.7;
      var tempo = 1000;
          $("#start").on("click", function () {
            $(".petal").css("background", ocapcity + tempo);
              for (i = 0; i <= petal.length ; i++) {
                console.log("petal");
                return petal;
              }
      });
  }


  //create an event listener for pause button to stop game until pressed again or app is closed

  //
  // //create an event listener that waits for user to hit a mirror sequence before running again


  // //create a function that counts down from one minute when pressed
  //
  // //create a function that turns timer off
  //
  // //create an alert asking user if they will like to pay another game after losing
  // //create an event listener for the alert that says 'yes' or 'no'

  var attempt = [];
  var turn = 1;

  
  //
  // if


  //create a do while loop that waits and runs while user hits repeated sequence

  //create a switch statement that adds one more random sequence to each new level


  //create a for loop that runs within each level with new sequences


  //create an if, elseif, else statement that says 'if user hits incorrect sequence, game alerts a "wrong buzz" and ends'.








   //create function that changes scoreboard to add 5 points for each successful sequence
  //create a for loop that adds 5 seconds to every 5 levels achieved as extra time to complete round


  //create an event listener that waits for a sucessful completion of level to rotate petals before transition to next level


  //create an if, else statement that says 'if user clicks "yes" previous level will restart, if "no", box will close and go back to "home".'

  //create a function that stores scores

  //game will remember levels achieved and let user to continue where they left off (level)

// });
