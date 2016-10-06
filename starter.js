document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");
});

var $score = 0;
var $level = 1;
var $lives = 3;
var $playing = false;

var $button = ('#start');
var $scoreDisplay = ('#score-display');
var $cells = ('.cell');

function displayScore() {
    levelUp();
    $scoreDisplay.text("Score: " + $score + "<span id='level-display'> Level: " + $level + "</span><span id='lifes-display'> Lives: " + lives + "</span>");
}

function levelUp() {
    level = Math.max(Math.floor($score / 10), 1);
}

function randomCell() {
    return Math.floor(Math.random() * 16);
}

function gameOver() {
    if ($lives === 0) {
        clearInterval(getCells);
        $score = 0;
        $level = 1;
        $lives = 5;
        $playing = false;
    }
}

function highlightCell() {
    var $target = randomCell();
    var $prevScore = score;
    $cells[target].css('background', 'red');
    setTimeout(function() {
      $cells[target].css('background', 'black');
        if ($score === $prevScore) {
            $lives--;
            displayScore();
            gameOver();
        }
    }, 1000)
}

$('#button').click(function() {
    if (!playing) {
        playing = true;
        displayScore();
        getCells = setInterval(function() {
            highlightCell();
        }, 1500);
    }
});

for (var i = 0; i < $cells.length; i++) {
    $cells[i].on("click", function() {
        if (playing) {
            var $cell = this;
            if (this.style.background === "pink") {
                score++;
            }
            else {
                $lives--;
                gameOver();
          }
            displayScore();
        }
    })
}
