// **ES6 - 2015 - using Classes to create a 3 level prototype chain, using super() to improve our code

// create User class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

User.prototype.admin = false; 

// create VerifiedMember class
class VerifiedMember extends User {
    constructor(name, age) {
        // we can now pass arguments into super(), similar to what we did when we used the call() methed previously
        super(name, age); 
    }
};

VerifiedMember.prototype.verified = true; 

// creat Doctor class
class Doctor extends VerifiedMember {
    constructor(name, age, expertise) {
        // we can pass the name and age arguments to super()
        super(name, age);
        this.doctor = true;
        this.expertise = expertise;
    }
    // add introduceSelf() to the [[Prototype]] of all derived objects
    introduceSelf() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
    }
}

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");