function getInitialLocation(location: string) {
  if (location) {
    return "town"
  }
  return "Jail"
}

describe("Pirate island", () => {
  it("should be in the jail when starting out", () => {
    const location = getInitialLocation("");
    expect(location).toEqual("Jail")
  });

  it("should be able to move to town", () => {
    const location = getInitialLocation("Town");

    expect(location).toEqual("Town");
  })

});
