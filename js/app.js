console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first
var gameScore = 0;
var scoreUpdate = document.getElementById('score');
var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];

 var start = document.getElementById('button').addEventListener('click', function() {

  console.log("button working");

  var randomise = Math.floor(Math.random() * jakeChoices.length);
  var typeChoices = document.getElementById('happy').innerHTML=randomise;


  document.addEventListener('keyup', function(e)  {

    if (e.key === jakeChoices) {

      console.log ("works");
      gameScore +=10;
    }

     // set time out function to deduct score here? so if jakeChoices not entered quick enough cycles to next word to enter?

   else {

    console.log("deduct score");
    gameScore -= 1;
  }

  });



//


scoreUpdate.innerHTML = gameScore;


});
