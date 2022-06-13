const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

describe("intern class", () => {
    it("can generate an intern object with input school as the school keyvalue", () => {
        const testSchool = "Midtown Highschool";
        const dummy = new Intern("Peter Parker", 3, "p.parker@shield.com", testSchool);
        expect(dummy.school).toBe(testSchool);
    });

    describe("getRole method", () => {
        it("should return Intern as the keyvalue", () => {
            testRole = "Intern";
            const dummy = new Intern("Peter Parker", 3, "p.parker@shield.com", "Midtown Highschool");
            expect(dummy.getRole()).toBe(testRole);
        });
    });

    describe("getSchool method", () => {
        it("should return the input school as the school keyvalue", () => {
            const testSchool = "Midtown Highschool";
            const dummy = new Intern("Peter Parker", 3, "p.parker@shield.com", testSchool);
            expect(dummy.getSchool()).toBe(testSchool);
        });
    });
});