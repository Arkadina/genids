import { createProjectId, createUserId } from "../index";

describe("Generate Id", () => {
    test("Create a id with 25 of caracters", () => {
        expect(createProjectId()).toHaveLength(25);
    });

    test("Create a id with 35 of caracters", () => {
        expect(createUserId()).toHaveLength(35);
    });
});
