const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officenum) {
        super(name, id, email);
        this.officeNumber = officenum;
    }

    getRole() {
        return "Manager";
    }
    
    getNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;