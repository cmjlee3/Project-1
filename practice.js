document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");



// Below makes it so when you hover over directions the info appears as well as dissapears when you are no longer hovering.
$( "#game-info" ).hover(
  function() {
    $( this ).append( $( "<span><br>1. Press Start<br> 2. Click the dots<br> 3. Three strikes you're out!</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);

 // pause.click(function(){
 //          clearInterval(timed());
 //        });


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
  var clicker = 0;


      var interval = setInterval(function(){
        var $random = Math.floor(Math.random()* $('.circle').length);
        var $color = '#'+Math.round(0xffffff*Math.random()).toString(16);
        var $newSize = ((Math.random()*20) + 50).toFixed();

        $('.circle').eq($random)
        .css({'background-color': $color, 'width': $newSize + 'px', 'height': $newSize + 'px'})
        .show()
        .click(function(){
          $(this).css('background-color', 'white');
          $('#score').html(function(i, val) { return +val+1 });
          $(this).off();
          clicker++;
          // if (clicker === 5){
          // clearInterval($(this));
    //clicker=0;
       // }
        })


      },500)


  //     $(document).keydown(pause=function(e){
  // if(e.keycode==32){
  //   console.log('pause working');
  // // document.getElementById('#score').css({'background-color': 'white'})
  //   }
  // })
}

// if ($("#pause").click(clearInterval(interval)));
 // var myObject = {
 //        stop: function(){
 //          console.log("stopping");
 //          clearInterval(interval);
 //        }
 //      }

// // $(document).on('keydown', function(e){
//   if(e.keycode==32){
//   document.getElementById('#score').style = "background-color: black;"
//     }
//   })

// function pause(){
//   $(document).on('keydown', function(e){
//   if(e.keycode==32){
//   e.stopPropagation();
//     }
//   })
// }

 // $(document).on('keydown', function(e){
 //  if(clicker !=0){
 //  $(???).pause();
 //    }
 //  })

  // function pause(){

  // $(document).on('keydown', function(e){
  // if(e.keycode==32){
  // e.preventDefault();

  //   }
  // })

//   console.log('pause!');
// }
//  var=
// function pause(){
//   $(document).on('keydown', function(event){
//   var key=event.keyCode;
//   if(event.keycode==32)
//   $(this).pause();

//   })

//   console.log('pause!');

// function alert(){
//    alert('Level 2!!!');
//    setInterval(function(){
//     var $random = Math.floor(Math.random()* $('.circle').length);
//     var $color = '#'+Math.round(0xffffff*Math.random()).toString(16);
//     $('.circle').eq($random)
//     .css('background-color', $color)
//     .show()
//     .click(function(){
//       $(this).css('background-color', 'white');
//       $('#score').html(function(i, val) { return +val+1 });
//       $(this).off();
//       clicker++;

//     });
//   },300)
// }







 // window.onkeydown = function() {
 //            if (game.input.keyboard.event.keyCode == 32){
 //                game.paused = !game.paused;
 //            }
 //        }
// HOW DO I MAKE A PAUSE BUTTON
// HOW DO I MAKE A COUNTER (COUNTDOWN) TO LOSE LIVES AND ALERT GAME OVER AFTER THREE LIVES LOST
  // HOW DO I ADD LEVELS
//  $('#game-info').hover(
// function(){$(this).toggleClass('#stuff');}
// );


// function loser(){
//   how do i make it so when the wrong div's/white ones are clicked, after three the game resets and alerts game over
// }
});





