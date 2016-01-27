describe("PlayerOne", function(){
  it("returns the player one's mark", function() {
    var testPlayer = new PlayerOne("X");
    expect(testPlayer.playerOneMark).to.equal("X");
  });
});

describe("PlayerTwo", function(){
  it("returns the player two's mark", function() {
    var testPlayer = new PlayerTwo("O");
    expect(testPlayer.playerTwoMark).to.equal("O");
  });
});

describe("Space", function(){
  it("reutnrs the player's mark", function(){
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });
});
