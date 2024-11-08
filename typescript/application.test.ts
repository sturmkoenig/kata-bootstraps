class PirateIsland {
  getCurrentLocation(location: string= "Jail") {
    return location;
  }
}


describe("Pirate island", () => {
  it("should be in the jail when starting out", () => {
    const pirateIsland = new PirateIsland()
    const location = pirateIsland.getCurrentLocation();
    expect(location).toEqual("Jail")
  });

  it("should be able to move to town", () => {
    const pirateIsland = new PirateIsland()
    const location = pirateIsland.getCurrentLocation("Town");

    expect(location).toEqual("Town");
  })

});
