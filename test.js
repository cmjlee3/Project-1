document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");


// Below makes it so when you hover over directions the info appears as well as dissapears when you are no longer hovering.

$( "#directions" ).hover(
  function() {
    $( this ).append( $( "<span><br>1. Press Start<br> 2. Click the dots<br> 3. Three strikes you're out!</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

// The function below allows the game to begin when the start button is clicked and then makes it so the button fades and is removed after that click. The function timed() is incorporated in order to start the game after the click.

function clickCircle(){
  $('#start').click(function(){
   $('.button').fadeOut('3000');
   $('this').remove();
   timed();
  });
}

clickCircle();


// This below runs incorporates the clicked function and allows the player to reach a next level at a certain number of clicks + displays an alert indicating having reached the next level + clears the clicking interval in order to progress to a faster speed which is incorporated in the function below.
var clicker = 0
var levelCounter = 1;

function timed(){
  if(clicker === 0){
    clicked();
  }
  else if (clicker === 10){
    levelCounter++;
    $('#levelNum').html(function(i, val) { return +val+1 })
    alert("Level " + levelCounter + ": Speed up!");
    clicker = 0;
    // alert=function() {};
    clearInterval(idNum);
    clicked();
  }
}



// This function sets a time interval for a single div to be randomly selected and then randomly assigned a color at a rate of 1.1 seconds. The latter part makes it so that when this specific div is clicked it turns to white and also adds a point to the score but stops adding points after that one click to the specific div has occured. It also increases the speed based on levelcounter progression.

var idNum;

function clicked(){
  idNum = setInterval(function(){
    var $random = Math.floor(Math.random()* $('.circle').length);
     var $color = '#'+Math.round(0xffffff*Math.random()).toString(16);
    $('.circle').eq($random)
    .css('background-color', $color)
    var $newSize = ((Math.random()*40) + 50).toFixed();
    $('.circle').eq($random)
    .css({'background-color': $color, 'width': $newSize + 'px', 'height': $newSize + 'px'})
    .show()
    .click(function(){
      $(this).css('background-color', 'white');
      $('#score').html(function(i, val) { return +val+1 });
      $(this).off();
      clicker++;
      console.log(clicker)
      timed()
    })
  },700 / levelCounter + 300);
};


});





