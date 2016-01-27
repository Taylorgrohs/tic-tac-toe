function Player (playerMark) {
  this.playerMark = playerMark;
};

function Space (x, y) {
  this.xCoordinate = x;
  this.yCoordinate = y;
};

Space.prototype.markedBy = function(playerMark) {
  Player.call(this, playerMark);
  return this.playerMark;
}


$(document).ready(function(){
  var x = "X";
  var o = "O";
  var count = 0;
  $("button").click(function(event){
    event.preventDefault();


      console.log(count);
    if (count % 2 === 0) {
      count++;
      $(this).text(o);
      //console.log(count);
    }
    else {
      count++;
      $(this).text(x);

    }


  });
});
