document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");

// var $score=0

function clickCircle(){
   $('#start').click(function(){
    $('.button').fadeOut('3000');
    $('this').remove();
    timed();
  });
}

clickCircle();

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
  },2000)
}
// HOW DO I MAKE IT SO WHEN I PRESS START AGAIN IT DOESN'T DOUBLE
// HOW DO I MAKE A PAUSE BUTTON
// HOW DO I MAKE A COUNTER (COUNTDOWN) TO LOSE LIVES AND ALERT GAME OVER AFTER THREE LIVES LOST
// HOW DO I ADD POINTS STARTING FROM 0,1,2 NOT 0, BLANK, 1




// function loser(){
//   how do i make it so when the wrong div's/white ones are clicked, after three the game resets and alerts game over
// }
});





