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
  var sequenceArray = [0, 1, 2, 3];
  var userTurn = [];
  var clickedPetal;
  var attempt =[];


//create an event listener for start button to initialize first sequence when pressed
  $("#start").click(function (){
      console.log("simon is on");
      animatePetal();
  });


//creates a random sequence
      function animatePetal() {
        var sequenceArray = [0, 1, 2, 3];
        console.log("sequence is up");
        var randomNum = sequenceArray[Math.floor(Math.random()*sequenceArray.length)];
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
        simon.push(randomNum);

}


//create an event listener that waits for user to hit a mirror sequence before running again

          if (userTurn) {
          $(".petal").on("click", function (clickedPetal){
          $("this").hasClass("on");
          console.log("userpushed");
          return attempt.push($("this"));
        });
      }
      // var i=0;
      // while(i<10){
      //   animatePetal(sequenceArray);
      //   i++;
      // }


//create a do while loop that waits and runs while user hits repeated sequence
          var continueGame = (animatePetal(sequenceArray));
          var i=0;
            do {
              animatePetal(sequenceArray);
              i< sequenceArray.length + i;
              i++;
            }
            while(i<4);


//create an event listener for the alert that says 'Incorrect'
      function lose () {
      if (randomNum.length!== clickedPetal.length){
          alert("INCORRECT!");

      // } else if (sequenceArray[1] !==1){
      //     alert("INCORRECT!");
      //
      // } else if (sequenceArray[2] !==2){
      //     alert("INCORRECT!");
      //
      // } else if (sequnceArray[3] !==3){
      //     alert("INCORRECT!");
      //
      // }  else{
      //   clickedPetal();
      }
    }







//_____________________________________
  //create a switch statement that adds one more random sequence to each new level

  //create a for loop that runs within each level with new sequences

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
