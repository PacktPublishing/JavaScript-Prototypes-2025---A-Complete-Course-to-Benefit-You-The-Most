// **ES6 - 2015 - using Object.setPrototypeOf() to create a 3 level prototype chain

// at the top of our chain, we have a User
// in other words, all Verified Members and all Doctors inherit from the User object
function User(name, age) {
    this.name = name; 
    this.age = age; 
}
// by default, all User's on our platform do not have admin rights
User.prototype.admin = false; 

// craete VerifiedMember constructor function
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

// add the introduceSelf() method to the Doctor.prototype. This is memory efficient because all derived objects will have this method on their [[Prototype]]
Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// **** LINK [[Prototype]]'s to the correct .prototype
Object.setPrototypeOf(Doctor.prototype, VerifiedMember.prototype);
Object.setPrototypeOf(VerifiedMember.prototype, User.prototype);

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");