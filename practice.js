document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");

// var $score=0

// The function below allows the game to begin when the start button is clicked and then makes it so the button fades and is removed after that click. The function timed() is incorporated in order to start the game after the click.
function clickCircle(){
   $('#start').click(function(){
    $('.button').fadeOut('3000');
    $('this').remove();
    timed();
  });
}

clickCircle();


// This function sets a time interval for a single div to be randomly selected and then randomly assigned a color at a rate of 1.1 seconds. The latter part makes it so that when this specific div is clicked it turns to white and also adds a point to the score but stops adding points after that one click to the specific dib has occured.
function timed(){
  setInterval(function(){
    var $random = Math.floor(Math.random()* $('.circle').length);
    var $color = '#'+Math.round(0xffffff*Math.random()).toString(16);
    $('.circle').eq($random)
    .css('background-color', $color)
    .show()
    .click(function(){
      $(this).css('background-color', 'white');
      $('#score').html(function(i, val) { return +val+1 });
      $(this).off();
    });
  },1100)
}

// function anim(e){

//   if(e.keyCode==32){
//     redLeft +=20;
//     document.getElementById('square1').style.left = redLeft + 'px';
//     winner();
//   }
// }

 // window.onkeydown = function() {
 //            if (game.input.keyboard.event.keyCode == 32){
 //                game.paused = !game.paused;
 //            }
 //        }
// HOW DO I MAKE A PAUSE BUTTON
// HOW DO I MAKE A COUNTER (COUNTDOWN) TO LOSE LIVES AND ALERT GAME OVER AFTER THREE LIVES LOST
  // HOW DO I ADD LEVELS




// function loser(){
//   how do i make it so when the wrong div's/white ones are clicked, after three the game resets and alerts game over
// }
});





