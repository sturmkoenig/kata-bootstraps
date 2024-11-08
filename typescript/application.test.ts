
function getCurrentLocation(location: string= "Jail") {
    return location;
}

describe("Pirate island", () => {
  it("should be in the jail when starting out", () => {
    const location = getCurrentLocation();
    expect(location).toEqual("Jail")
  });

  it("should be able to move to town", () => {
    const location = getCurrentLocation("Town");

    expect(location).toEqual("Town");
  })

});
