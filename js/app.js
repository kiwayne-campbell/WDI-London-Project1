console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first
var gameScore = 0;
var scoreUpdate = document.getElementById('score');
var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var randomise = Math.floor(Math.random() * jakeChoices.length);
var typeChoices = document.getElementsByClassName('happyChoice').innerHTML=randomise;

 var start = document.getElementById('button').addEventListener('click', function() {

  console.log("button working");

  document.addEventListener('keyup', function(e)  {

    if (e.key === jakeChoices) {

      console.log ("correct word entered");
    }
     gameScore +=10;

     // set time out function to deduct score here? so if jakeChoices not entered quick enough cycles to next word to enter?

  });


});
