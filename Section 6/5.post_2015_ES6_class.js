// **ES6 - 2015 - using Classes introduced by ES6 to create long prototype chains

// first, let's create a VerifiedMember class
class VerifiedMember {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
// we can use the same method as previously to add a "verified" boolean property to the .prototype of VM
VerifiedMember.prototype.verified = true; 

// next, let's create our Doctor class
// we have to use 'extends' when creating prototype chains
class Doctor extends VerifiedMember {
    constructor(name, age, expertise) {
        // because we have our own constructor function here, we have to first call super(), before we reach the next line of code where we use 'this'
        super();
        // we can now access 'this' and write our own logic
        this.name = name;
        this.age = age;
        this.doctor = true;
        this.expertise = expertise;
    }
    // adding methods outside of our constructor function will add them to the [[Prototype]] of derived objects
    introduceSelf() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
    }
}

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");