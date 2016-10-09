console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first

var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var start = document.getElementById('button');
var happyChoice = document.getElementById('happyChoice');
var imageUpdate = document.getElementById('jakeImage');
var scoreUpdate = document.getElementById('score');
var gameScore = 0;


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
        scoreUpdate.innerHTML = gameScore;
      }

     else {

      console.log("deduct score");
      gameScore -= 15;
      scoreUpdate.innerHTML = gameScore;
    }

    });
}

refreshData();

// scoreUpdate.innerHTML = gameScore;

function countdown( elementName, minutes, seconds ) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
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

    element = document.getElementById("timer");
    endTime = (+new Date()) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

countdown("timer", 2, 0 );



// need to create function that makes the game display a win or loose message at end of game - if game is above
// certain score you win if not you loose - ends when timer reaches zero


// need to create a change of pictures for jake/finn depending on score


// reset button to set game back to original




// this function evokes the change of image depending on gameScore

// if (gameScore > 50) {
//
// document.getElementById()
//
//
// }





});
