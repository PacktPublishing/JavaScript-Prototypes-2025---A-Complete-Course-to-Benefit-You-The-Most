// **ES6 - 2015 - using Object.setPrototypeOf() and the call() method to improve our code

// define the User construtor function
function User(name, age) {
    // test inheritance by changing all names to UPPER CASE
    this.name = name.toUpperCase(); 
    this.age = age; 
}

User.prototype.admin = false; 

// create VerifiedMember constructor function
function VerifiedMember(name, age) {
    // call the User() function so that the name and age properties are assigned to the derived object
    User.call(this, name, age);
    // ... you can have other custom logic and properties here ... 
    
}

// add the "verified" boolean property to all VerifiedMember instances
VerifiedMember.prototype.verified = true;

// create Doctor construtor function
function Doctor(name, age, expertise) {
    // let's execute the VM function, by telling it to properly assign the name and age properties to the derived object
    VerifiedMember.call(this, name, age);
    // next, let's add custom properties to our Doctor constructor function
    this.doctor = true;
    this.expertise = expertise;
}

Doctor.prototype.introduceSelf = function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// **** LINK [[Prototype]]'s to the applicable .prototype
Object.setPrototypeOf(Doctor.prototype, VerifiedMember.prototype);
Object.setPrototypeOf(VerifiedMember.prototype, User.prototype);

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");