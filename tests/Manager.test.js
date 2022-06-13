const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");


describe("manager class", () => {
    it("can generate a manager object with input number as the officeNumber keyvalue", () => {
        const testNumber = "678-136-7092";
        const dummy = new Manager("Steve Rogers", 0, "rogers@shield.com", testNumber);
        expect(dummy.officeNumber).toBe(testNumber);
    });

    describe("getRole method", () => {
        it("should return Manager as the keyvalue", () => {
            testRole = "Manager";
            const dummy = new Manager("Steve Rogers", 0, "rogers@shield.com", "678-136-7092");
            expect(dummy.getRole()).toBe(testRole);
        });
    });

    describe("getNumber method", () => {
        it("should return the input number as the officeNumber keyvalue", () => {
            const testNumber = "678-136-7092";
            const dummy = new Manager("Steve Rogers", 0, "rogers@shield.com", testNumber);
            expect(dummy.getNumber()).toBe(testNumber);
        });
    });
});