describe("PlayerOne", function(){
  it("returns the player's mark", function() {
    var testPlayer = new PlayerOne("X");
    expect(testPlayer.playerOneMark).to.equal("X");
  });
});
