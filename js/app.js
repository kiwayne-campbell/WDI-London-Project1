console.log("alive");
// we can add music for start but not for now- lets get game funcitoning first

var jakeChoices = ["test1", "test2", "test3", "test4", "test5"];
var start = document.getElementById('start');
var timerDisplay = document.getElementById('timer');
var happyChoice = document.getElementById('happyChoice');
var imageUpdate = document.getElementById('jakeImage');
var imageUpdate2 = document.getElementById('finnImage');
var scoreUpdate = document.getElementById('score');
var replaceBoard = document.getElementById('resultDisplay');
var gameScore = 0;
var resetGame = document.getElementById('restart');

// var decrease = setInterval(function () {
//     scoreUpdate.innerHTML = gameScore -= 10;
// }, 1000);



// start game on click

start.addEventListener('click', function() {
  var choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
  happyChoice.textContent = choice;
  happyChoice.style.fontSize = "60px";
  happyChoice.style.lineHeight = "200px";
  scoreUpdate.innerHTML = gameScore;
  imageUpdate.style.display = "block";
  imageUpdate2.style.display = "block";
  scoreUpdate.style.display = "block";
  timerDisplay.style.display = "block";
  start.style.display = "none";
  countdown("timer", 0.2, 0 );

  document.addEventListener('keyup', function(e)  {

    if (e.key === choice[0]) {
      console.log("works");
      choice = choice.slice(1);
      happyChoice.textContent = choice;
      gameScore += 10;
      scoreUpdate.innerHTML = gameScore;
    }
    else {
      gameScore -= 50;
      scoreUpdate.innerHTML = gameScore;
    }

// make image update with new image once score goes above certain level

    if(gameScore > 50) {
      imageUpdate.style.backgroundImage = "url(/images/happyjake2.gif)";
      imageUpdate2.style.backgroundImage = "url(/images/happyfinn.gif)";
    }
    else {
      imageUpdate.style.backgroundImage = "url(/images/sadjake2.gif)";
      imageUpdate2.style.backgroundImage = "url(/images/frustratedfinn.gif)";
    }

    if(choice.length === 0) {
      choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
      happyChoice.textContent = choice;
    }
  });


  // my countdown timer - ask Mike how to make less complex

function countdown( elementName, minutes, seconds ) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits( n ){
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer() {
      msLeft = endTime - (+new Date());

// add game win function here

      if ( msLeft < 0 && gameScore > 50 ) {
        console.log("grabbing win image");
        happyChoice.style.display = "none";
        replaceBoard.style.display = "block";
        replaceBoard.style.backgroundImage = "url(/images/jake_the_dog___pure_css_adventure_time_wallpaper_by_sangreprimitiva-d5vs51f.png)";
        replaceBoard.innerHTML = "Finn made Jake Happy! You win! Yaaaay!";
        clearInterval(decrease);
        }

        else if ( msLeft < 0 && gameScore < 50 ) {
          console.log("grabbing losing image");
          happyChoice.style.display = "none";
          replaceBoard.style.display = "block";
          replaceBoard.style.backgroundImage = "url(/images/Inspirational+wallpaper_f2b046_5473871.jpg)";
          replaceBoard.innerHTML = "Jake is still sad! Finn lost! Nooo!";
          clearInterval(decrease);
        }

       else {
          time = new Date( msLeft );
          hours = time.getUTCHours();
          mins = time.getUTCMinutes();
          element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
          setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );

          // need to fix interval function- taking away too much but works with everything else

          // decrease();

      }
}

  element = document.getElementById(elementName);
  endTime = (+new Date()) + 1000 * (60*minutes + seconds) + 500;
  updateTimer();

}

});


// reset button to set game back to original

resetGame.addEventListener('click', function() {
  console.log ("button works");
  document.location.reload(true);
});
