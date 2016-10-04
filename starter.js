document.addEventListener("DOMContentLoaded", function(event) {
console.log("game!");
});

$('#start').click(function(){
  $(this).fadeOut('slow');
  createBox();
})

function createBox() {
  var color = randomColor();
  var k = Math.floor(Math.random() * ( 90 - 65 + 1 )) + 65;
  var ch = String.fromCharCode(k);
  var top = Math.floor(Math.random() * height );
  var left = Math.floor(Math.random() * width );
  $('body').append('<span class="bubb bubb'+ k +'" style="left: '+ left +'; top: '+ top +'; background-color:'+ color +'">'+ ch +'</span>');
  setTimeout(createBox, 1000);
}

function randomColor(){
var color = '';
var values = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
for (c = 0; c < 6; c++)
{
no = Math.floor(Math.random() * 15);
color += values[no];
}
return color;
}
};

(function makeDiv(){
    var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
    $newdiv = $('<div/>').css({
        'width':divsize+'px',
        'height':divsize+'px',
        'background-color': color
    });

    var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    $newdiv.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(400).delay(300).fadeOut(900,

      function(){
       // $(this).remove();
       makeDiv();
    });
})();
