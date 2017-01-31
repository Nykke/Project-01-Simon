$(document).ready(function() {

//test console
  console.log("hello simon");
  console.log($);

  //set up variables
  var petal = ["red", "blue", "green", "yellow"];
  var scoreboard = 0;
  var clock = "00:00";
  var level = 1;
  var simon = [];
  var randomNum = 0;
  var sequenceArray=[];
  var x = 0;




  //create an event listener for start button to initialize first sequence when pressed
  $("#start").click(function (){
      console.log("simon is on");
      animatePetal();
  });


  //creates a random sequence
      function animatePetal() {
        var sequenceArray = [0, 1, 2, 3, 3, 2, 1, 0, 2, 3, 1, 0, 3, 1, 2, 0, 0, 3, 1, 2, 1, 0, 3, 2, 1, 3, 2, 0];
        console.log("sequence is up");
        var randomNum = sequenceArray[Math.floor(Math.random()*sequenceArray.length)];
        switch(randomNum){
          case 0:
            $("#red").fadeOut(200).fadeIn(200);
            break;
          case 1:
            $("#blue").fadeOut(200).fadeIn(200);
            break;
          case 2:
            $("#green").fadeOut(200).fadeIn(200);
            break;
          case 3:
            $("#yellow").fadeOut(200).fadeIn(200);
            break;
          default:
            break;
        }
        // var randomNum = sequenceArray[Math.floor(Math.random()*sequenceArray.length)];
        //  for (i=0; i < petal.length; i++) {

        //  }


// while(x<1){

}



   //create an event listener that waits for user to hit a mirror sequence before running again
  //create a do while loop that waits and runs while user hits repeated sequence



  //create an alert asking user if they will like to pay another game after losing
  //create an event listener for the alert that says 'yes' or 'no'

  // var attempt = [];
  // var turn = 1;







  //create a do while loop that waits and runs while user hits repeated sequence

  //create a switch statement that adds one more random sequence to each new level


  //create a for loop that runs within each level with new sequences


  //create an if, elseif, else statement that says 'if user hits incorrect sequence, game alerts a "wrong buzz" and ends'.






  //create a function that counts down from one minute when pressed
  //create a function that turns timer off

   //create function that changes scoreboard to add 5 points for each successful sequence
  //create a for loop that adds 5 seconds to every 5 levels achieved as extra time to complete round

  //create an event listener for pause button to stop game until pressed again or app is closed


  //create an event listener that waits for a sucessful completion of level to rotate petals before transition to next level


  //create an if, else statement that says 'if user clicks "yes" previous level will restart, if "no", box will close and go back to "home".'

  //create a function that stores scores

  //game will remember levels achieved and let user to continue where they left off (level)

});
