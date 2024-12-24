// **ES6 - 2015 - using Classes to create a 3 level prototype chain

// User class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// by default, all user's are not admin
User.prototype.admin = false; 

// create VerifiedMember class
// we can extend the VM to inherit from the User, using the "extends" keyword
class VerifiedMember extends User {
    constructor(name, age) {
        super(); 
        this.name = name;
        this.age = age;
    }
};

VerifiedMember.prototype.verified = true; 

// create Doctor class
class Doctor extends VerifiedMember {
    constructor(name, age, expertise) {
        // remember to call super(), because we are extending our Doctor class and we have also defined our own custom constructor function
        super();
        this.name = name;
        this.age = age;
        this.doctor = true;
        this.expertise = expertise;
    }
    introduceSelf() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
    }
}

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");