const Employee = require("../lib/Employee");

describe("employee class", () => {
    it("can generate object with input name as the name property", () => {
        const inputName = "Wanda";
        const dummy = new Employee(inputName);
        expect(dummy.name).toBe(inputName);
    });

    it("can generate object with input ID as the id property", () => {
        const inputName = "Wanda";
        const inputID = 616;
        const dummy = new Employee(inputName, inputID);
        expect(dummy.id).toBe(inputID);
    });

    it("can generate object with input email as the email property", () => {
        const inputName = "Wanda";
        const inputID = 303;
        const inputEmail = "Wanda@shield.com";
        const dummy = new Employee(inputName, inputID, inputEmail);
        expect(dummy.email).toBe(inputEmail);
    });

    describe("getName method", () => {
        it("can return the correct name keyvalue", () => {
            const inputName = "Wanda";
            const dummy = new Employee(inputName);
            expect(dummy.getName()).toBe(inputName);
        });
    });
        
    describe("getId method", () => {
        it("can return the correct id keyvalue", () => {
            const inputName = "Wanda";
            const inputID = 303;
            const dummy = new Employee(inputName, inputID);
            expect(dummy.getId()).toBe(inputID);
        });
    });
        
    describe("getEmail method", () => {
        it("can return the correct email keyvalue", () => {
            const inputName = "Wanda";
            const inputID = 303;
            const inputEmail = "Wanda@shield.com";
            const dummy = new Employee(inputName, inputID, inputEmail);
            expect(dummy.getEmail()).toBe(inputEmail);
        });
    });
        
    describe("getRole method", () => {
        it("should return Employee as the keyvalue", () => {
            testRole = "Employee";
            const dummy = new Employee("Wanda", 616, "Wanda@shield.com");
            expect(dummy.getRole()).toBe(testRole);
        });
    });
    
});