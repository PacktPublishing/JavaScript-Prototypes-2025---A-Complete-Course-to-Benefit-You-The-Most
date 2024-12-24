// **ES5 - 2011 - using Object.create()

// create a VerifiedMember constructor function
function VerifiedMember(name, age) {
    this.name = name;
    this.age = age;
}

// add the "verified" boolean property to all VerifiedMember instances
VerifiedMember.prototype.verified = true;

// create Doctor construtor function
function Doctor(name, age, expertise) {
    this.name = name;
    this.age = age;
    this.doctor = true;
    this.expertise = expertise;
}

// set our Doctor.prototype to an object that has it's [[Prototype]] set to the VerifiedMember.prototype, using Object.create()
Doctor.prototype = Object.create(VerifiedMember.prototype);
// we still need to fix our constructor problem! 
Doctor.prototype.constructor = Doctor;

// adding introduceSelf() method to the .prototype of Doctor, so that all instances will have it on their [[Prototype]]
Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");
console.log(gpDoctor.verified);