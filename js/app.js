
var jakeChoices = ["flishy", "lady rainicorn", "time sandwich", "beautopia", "pie", "adventure", "finn", "burgers", "bxhjkcblds", "ice cream", "burrito", "lobster soul", "korean food", "karate chop", "sledge time"];
var start = document.getElementById('start');
var timerDisplay = document.getElementById('timer');
var happyChoice = document.getElementById('happyChoice');
var imageUpdate = document.getElementById('jakeImage');
var imageUpdate2 = document.getElementById('finnImage');
var scoreUpdate = document.getElementById('score');
var replaceBoard = document.getElementById('resultDisplay');
var adventureSounds = document.getElementById('adventureSounds');
var soundsBackground = document.getElementById('soundsBackground');
var resetGame = document.getElementById('restart');
var gameScore = 0;
var isPlaying = false;

// add function to dcrease score as time counts down -  had to add tiny delay to account
var decrease = setInterval(function () {
  gameScore -= 10;
  scoreUpdate.innerHTML = gameScore;}, 1400);

// start game on click & execute necessary elements & styling

start.addEventListener('click', function() {
  isPlaying = true;
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
  countdown("timer", 1, 0 );
  soundsBackground.play();
  soundsBackground.loop = true;


  document.addEventListener('keyup', function(e)  {

    if(!isPlaying) return false;

    if (String.fromCharCode(e.keyCode).toLowerCase() === choice[0]) {
      choice = choice.slice(1);
      happyChoice.textContent = choice;
      gameScore += 5;
      scoreUpdate.innerHTML = gameScore;
    }
    else {
      gameScore -= 100;
      scoreUpdate.innerHTML = gameScore;
    }

// make image update with new image once score goes above certain level & add sound effects and shuffle pattern

    if(gameScore > 100) {
      imageUpdate.style.backgroundImage = "url(/images/happyjake2.gif)";
      imageUpdate2.style.backgroundImage = "url(/images/happyfinn.gif)";
    }
    else {
      imageUpdate.style.backgroundImage = "url(/images/sadjake2.gif)";
      imageUpdate2.style.backgroundImage = "url(/images/frustratedfinn.gif)";
    }

    if(choice.length === 0) {
      adventureSounds.play();

      choice = jakeChoices[Math.floor(Math.random() * jakeChoices.length)];
      happyChoice.textContent = choice;
    }
  });

  // my countdown timer - make less complex?

    function countdown (elementName, minutes, seconds ) {
      var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n ){
      return (n <= 9 ? "0" + n : n);
      }

    function updateTimer() {
      msLeft = endTime - (+new Date());

// add game win function here as based on countdown timer reaching 0. should show win or lose message

      if(msLeft < 0) {
        happyChoice.style.display = "none";
        replaceBoard.style.display = "block";
        clearInterval(decrease);
        isPlaying = false;

        if(gameScore > 50) {
          replaceBoard.style.backgroundImage = "url(/images/jake_the_dog___pure_css_adventure_time_wallpaper_by_sangreprimitiva-d5vs51f.png)";
          replaceBoard.innerHTML = "Finn made Jake Happy! You win! Yaaaay!";
        } else {
          replaceBoard.style.backgroundImage = "url(/images/Inspirational+wallpaper_f2b046_5473871.jpg)";
          replaceBoard.innerHTML = "Jake is still sad! Noooo!";
        }
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
});

// reset button to set game back to original state

resetGame.addEventListener('click', function() {
  console.log ("button works");
  document.location.reload(true);
});
