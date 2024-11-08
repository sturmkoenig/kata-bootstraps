type Location = "Jail" | "Town" | "Bar";

class PirateIsland {
    location: Location;

    move(location: Location = "Jail") {
        this.location = location;
    }
}


describe("Pirate island", () => {

    it.each([['Bar', "Town", "Jail"]])
    ("should be able to move to the bar", (location: Location) => {
        const pirateIsland = new PirateIsland()
        pirateIsland.move(location);

        expect(pirateIsland.location).toEqual(location);
    })


});
