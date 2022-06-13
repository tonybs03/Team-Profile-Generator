const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("engineer class", () => {
    it("can generate engineer object with input gitHub username as the github keyvalue", () => {
        const testGit = "starkindustry";
        const dummy = new Engineer("Tony Stark", 1, "stark@shield.com", testGit);
        expect(dummy.github).toBe(testGit);
    });

    describe("getRole method", () => {
        it("should return Employee as the keyvalue", () => {
            testRole = "Engineer";
            const dummy = new Engineer("Tony Stark", 1, "stark@shield.com", "starkindustry");
            expect(dummy.getRole()).toBe(testRole);
        });
    });

    describe("getGithub method", () => {
        it("should return the input github as the keyvalue", () => {
            const testGit = "starkindustry";
            const dummy = new Engineer("Tony Stark", 1, "stark@shield.com", testGit);
            expect(dummy.getGithub()).toBe(testGit);
        });
    });
});