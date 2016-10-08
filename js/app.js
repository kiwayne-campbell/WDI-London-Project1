console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first

var scoreUpdate = document.getElementById('score');
var gameScore = 0;
var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var start = document.getElementById('button');
var happyChoice = document.getElementById('happyChoice');
var imageUpdate = document.getElementById('jakeImage');


start.addEventListener('click', function() {

  console.log("button working");



  var choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];

  happyChoice.textContent = choice;


  function refreshData() {

  x = 4;

console.log("works");
var choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
happyChoice.textContent = choice;

    setTimeout(refreshData, x*1000);

    document.addEventListener('keyup', function(e)  {

      if (e.key === choice[0]) {

        console.log ("Add score");
        choice = choice.slice(1);
        happyChoice.textContent = choice;
        gameScore += 10;
      }

     else {

      console.log("deduct score");
      gameScore -= 15;
    }

    });
}

refreshData();

scoreUpdate.innerHTML = gameScore;

// this function evokes the change of image depending on gameScore

// if (gameScore > 50) {
//
// document.getElementById()
//
//
// }

});
