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
  $("form").submit(function(event){
    var player1 = $("input#player1Icon").val();
    var player2 = $("input#player2Icon").val();
    var inputtedPlayer1 = new Player(player1);
    var inputtedPlayer2 = new Player(player2);
    event.preventDefault();
    var count = 0;
    $("button.game").click(function(event){
      event.preventDefault();


        console.log(count);
      if (count % 2 === 0) {
        count++;
        $(this).text(inputtedPlayer2.playerMark);
        //console.log(count);
      }
      else {
        count++;
        $(this).text(inputtedPlayer1.playerMark);

      }

    console.log(inputtedPlayer1);
    console.log(inputtedPlayer2);
  });



  });
  $("button.clear-board").click(function(){
    $("button.game").empty();
  });
});
