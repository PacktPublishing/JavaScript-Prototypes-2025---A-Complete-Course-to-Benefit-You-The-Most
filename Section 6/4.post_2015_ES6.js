// **ES6 - 2015 - using Object.setPrototypeOf()

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

// define our introduceSelf() method on the .prototype property of Doctor
Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// **** LINK the Doctor.prototype.[[Prototype]] to VerifiedMember.prototype. Generally, using setPrototypeOf() for pure objects is performance inefficient. But when setting [[Prototype]]'s inside of functions, it's great. Do you notice that we no longer have a constructor problem? Pretty neat, huh?
Object.setPrototypeOf(Doctor.prototype, VerifiedMember.prototype);

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");