console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first

var scoreUpdate = document.getElementById('score');
var gameScore = 0;
var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var start = document.getElementById('button');
var happyChoice = document.getElementById('happyChoice');

scoreUpdate.textContent = gameScore;

start.addEventListener('click', function() {

  console.log("button working");

  var choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];

  happyChoice.textContent = choice;


  // setTimeout(function(){ console.log(typeChoices); }, 3000);

//   function refreshData() {
//
//        x = 5;
// console.log("works but not repeating JS");
//     happyChoice.textContent = choice;
//
//     setTimeout(refreshData, x*1000);
// }
//
// refreshData();


//
// window.setInterval(function(){
//
//
//
// }, 5000);


  document.addEventListener('keyup', function(e)  {

    if (e.key === choice[0]) {

      console.log ("works");
      choice = choice.slice(1);
      happyChoice.textContent = choice;
      gameScore += 10;
    }

     // set time out function to deduct score here? so if jakeChoices not entered quick enough cycles to next word to enter?

   else {

    console.log("deduct score");
    gameScore -= 15;
  }

  });


scoreUpdate.textContent = gameScore;


});
