describe("Player", function(){
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.playerMark).to.equal("X");
  });
});

describe("Player", function(){
  it("returns the player's mark", function() {
    var testPlayer = new Player("O");
    expect(testPlayer.playerMark).to.equal("O");
  });
});

describe("Space", function(){
  it("reutnrs the player's mark", function(){
    var testSpace = new Space(1,2);
    expect(testSpace.xCoordinate).to.equal(1);
  });
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.yCoordinate).to.equal(2);
   });
   it("lets a player mark a space", function() {
     var testPlayer = new Player("X");
     var testSpace = new Space(1, 2);
     expect(testSpace.markedBy(testPlayer.playerMark)).to.equal(testPlayer.playerMark);
   });
});
