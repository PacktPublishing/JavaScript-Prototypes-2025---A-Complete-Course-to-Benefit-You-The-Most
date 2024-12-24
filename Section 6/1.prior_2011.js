// create VerifiedMember constructor function (by convention, all constructor functions start with a CAPITAL letter)
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

// add the introduceSelf method to the prototype of Doctor so it's available on the [[Prototype]] of all Doctor instances
Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");