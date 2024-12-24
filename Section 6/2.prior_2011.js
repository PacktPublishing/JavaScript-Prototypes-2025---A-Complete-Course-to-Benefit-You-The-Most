// create VerifiedMember constructor function
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

// using "new" to set our Doctor.prototype to the VM prototype
Doctor.prototype = new VerifiedMember(); 
// fixing the constructor problem by manually assigning it (not a great idea, but we had limited alternatives back in 2011)
Doctor.prototype.constructor = Doctor;

// add the introduceSelf to the prototype of Doctor so it's available on the [[Prototype]] of all Doctor instances
Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");