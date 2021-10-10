import {verifyNeighbours} from "./verifier"

describe("live cells", () => {
    it("has 2 cells, it lives.", () => {
        const result = verifyNeighbours(2, "it is alive");
        expect(result).toBe(true);
    })
    it("has less than 2 cells, it dies.", () => {
        const result = verifyNeighbours(1, "it is alive");
        expect(result).toBe(false);
    })
    it("higher than 3 cells, it dies.", () => {
        const result = verifyNeighbours(4, "it is alive");
        expect(result).toBe(false);
    })

})

describe("dead cells", () => {
    it("it has exactly 3, it becomes alive", () => {
        const result = verifyNeighbours(3, "it is dead");
        expect(result).toBe(true);
    })

    it("it has 2 neighbours, it stays dead", () => {
        const result = verifyNeighbours(2, "it is dead");
        expect(result).toBe(false);
    })
    
})