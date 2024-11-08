type Location = "Jail" | "Town" | "Bar" | "Beach" | "Harbor";

class PirateIsland {
    location: Location;

    move(location: Location = "Jail") {
        this.location = location;
    }
}


describe("Pirate island", () => {

    it.each([['Bar'], ["Town"], ["Jail"], ["Beach"], ["Harbor"]])
    ("should be able to move to the bar", (location: Location) => {
        const pirateIsland = new PirateIsland()
        pirateIsland.move(location);

        expect(pirateIsland.location).toEqual(location);
    })


});
