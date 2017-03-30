$(document).ready(function() {

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
    matchingArrays = true;

    //set sequence variables
    var colorsArray = ["red", "blue", "yellow", "green"];

    //set timer
    var seconds = 0;
    var clockId;
    //this is going to add a delay to compare the sequences for the incorrect answer check
    var roundNumber = 0;


    //loops through the simonSequence and then shows the petals on the dom to player
    function animatePetals() {
        for (var i = 0; i < simonSequence.length; i++) {
            displayPetal(i);
        }
        console.log("simonSequence");
        console.log(simonSequence);

    }

    //player should be able to hit the start button ONLY to start Simon game
    $("#start").click(function() {

        //interval set for timer
        clockId = setInterval(updateClock, 1000);

        //start timer
        function updateClock() {
            seconds++;
            $("#clock").html(seconds);
        }

        $("#pause").click(function() {
            clearInterval(clockId);
        });


        //setting rounds up
        roundNumber = 0;
        roundNumber++;


        simonSequence = [];
        playerSequence = [];

        //once the game has started user should be able to see one random petal light up
        addNextPetal();

    });

    //checks whose turn it is
    function sequenceCheck() {

        console.log(`Top of sequenceCheck: Simon:${simonSequence[roundNumber]} Player:${playerSequence[roundNumber]}`)

        //checks for incorrect answer
        if (simonSequence[roundNumber] !== playerSequence[roundNumber]) {
          console.log(`Condish: Simon:${simonSequence[roundNumber]} Player:${playerSequence[roundNumber]}`)
          matchingArrays = false;
          audioIncorrect.play();
          alert("INCORRECT, GAME OVER!");
          return;
        }

      //check for correct answer
      if (simonSequence.length === playerSequence.length) {

        playerSequence = [];
        addNextPetal();
        winGame();

      }
    }

    //generate new value to push to simonSequence iff player's last choice equals the simonSequence's last value
    function addNextPetal() {
        var randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        //simonSequence is stored
        simonSequence.push(randomColor);
        roundNumber++;
        //show the player new color
        animatePetals();
    }

    function playerClick() {
        //push value of id to compare
        playerSequence.push($(this).attr("id"));
        console.log("Player Sequence");
        console.log(playerSequence);
        roundNumber =+0
        sequenceCheck();
    }
    //playerClick is activated
    $(".petal").on("click", playerClick);


    //display the sequence to player
    function displayPetal(i) {
        setTimeout(function() {
            switch (simonSequence[i]) {
                case "red":
                    $("#red").fadeOut(500).fadeIn(500);
                    audio[1].play();
                    break;
                case "blue":
                    $("#blue").fadeOut(500).fadeIn(500);
                    audio[2].play();
                    break;
                case "green":
                    $("#green").fadeOut(500).fadeIn(500);
                    audio[3].play();
                    break;
                case "yellow":
                    $("#yellow").fadeOut(500).fadeIn(500);
                    audio[4].play();
                    break;
                default:
                    break;
            }
            //delay before showing next sequence
        }, i * 1000);
    }

    //win the game
     function winGame(){
       if ("#petal" === 15){
         alert("You win!");
       }
     }

}); //end of document
