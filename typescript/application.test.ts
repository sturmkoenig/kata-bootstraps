type Location = "Jail" | "Town";

class PirateIsland {
  location: Location;

  move(location: Location = "Jail") {
    this.location = location;
  }
}


describe("Pirate island", () => {
  it("should be in the jail when starting out", () => {
    const pirateIsland = new PirateIsland()
    pirateIsland.move();
    expect(pirateIsland.location).toEqual("Jail")
  });

  it("should be able to move to town", () => {
    const pirateIsland = new PirateIsland()
    pirateIsland.move("Town");

    expect(pirateIsland.location).toEqual("Town");
  })

});
