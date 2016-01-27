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
