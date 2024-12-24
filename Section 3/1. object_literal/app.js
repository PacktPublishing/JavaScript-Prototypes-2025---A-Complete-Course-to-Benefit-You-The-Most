// create a gp doctor object using the most simple syntax
let gpDoctor = {};

gpDoctor.name = "Dr Wally";
gpDoctor.expertise = "Diagnosis";
gpDoctor.age = 48; 
gpDoctor.verified = true; 
gpDoctor.introduceSelf = function() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

gpDoctor.introduceSelf();

// creating a dermatologist doctor using the most simple object literal syntax
let dermDoctor = {};
dermDoctor.name = "Dr Bean";
dermDoctor.expertise = "Dermatology";
dermDoctor.age = 38; 
dermDoctor.skillset = ['hair', 'nails'];
dermDoctor.verified = true; 
dermDoctor.introduceSelf = function() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

dermDoctor.introduceSelf();