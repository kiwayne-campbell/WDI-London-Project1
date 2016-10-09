console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first

var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var start = document.getElementById('button');
var happyChoice = document.getElementById('happyChoice');
var imageUpdate = document.getElementById('jakeImage');
var scoreUpdate = document.getElementById('score');
var gameScore = 0;


start.addEventListener('click', function() {
  var choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
  happyChoice.textContent = choice;
  scoreUpdate.innerHTML = gameScore;
  countdown("timer", 2, 0 );

  document.addEventListener('keyup', function(e)  {

    if (e.key === choice[0]) {
      choice = choice.slice(1);
      happyChoice.textContent = choice;
      gameScore += 20;
      scoreUpdate.innerHTML = gameScore;
    }
    else {
      gameScore -= 10;
      scoreUpdate.innerHTML = gameScore;
    }

// make image update with new image once score goes above certain level

    if(gameScore > 50) {
      imageUpdate.style.backgroundImage = "url(/images/happyjake2.gif)";
    }
    else {
      imageUpdate.style.backgroundImage = "url(/images/sadjake.gif)";
    }

    if(choice.length === 0) {
      choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
      happyChoice.textContent = choice;
    }
  });
});



  // my countdown timer

function countdown( elementName, minutes, seconds ) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits( n ){
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer() {
      msLeft = endTime - (+new Date());
      if ( msLeft < 1000 ) {
          element.innerHTML = "Times Up!";
      } else {
          time = new Date( msLeft );
          hours = time.getUTCHours();
          mins = time.getUTCMinutes();
          element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
          setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
      }
  }

  element = document.getElementById(elementName);
  endTime = (+new Date()) + 1000 * (60*minutes + seconds) + 500;
  updateTimer();
}



// need to create game win function that makes the game display a win or loose message at end of game - if game is above
// certain score you win if not you loose - ends when timer reaches zero


// reset button to set game back to original
