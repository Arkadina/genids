import { createSpecificLength } from "../index";

describe("Generate Id", () => {
    test("Create a id with a specific length", () => {
        expect(createSpecificLength(11)).toHaveLength(11);
    });
});
