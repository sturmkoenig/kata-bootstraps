function getInitialLocation() {
  return "Jail"
}

describe("A Test", () => {
  it("should be in the jail when starting out", () => {
    const location = getInitialLocation();
    expect(location).toEqual("Jail")
  });

});
