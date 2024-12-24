function Doctor(name, age, expertise) {
    // let's use ECMAScript's Object.create() method to set the prototype
    // yippee, we are now taking advantage of JS's prototypal based properties
    let obj = Object.create(Doctor.prototype);
    obj.name = name; 
    obj.age = age; 
    obj.expertise = expertise; 
    // don't forget to return the object
    return obj; 
}

// let's add all shared properties and methods (in this case only the introduceSelf() method), to the Doctor's prototype
Doctor.prototype.introduceSelf = function() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// lets create a gp doctor
let gpDoctor = Doctor("Dr Wally", 48, "diagnosis");

// lets create a dermatologist doctor
let dermDoctor = Doctor("Dr Bean", 38, "dermatology");

// we want to amend the introduceSelf method
Doctor.prototype.introduceSelf = function() {
    console.log("NEW NEW NEW introduceSelf() method");
}

// Testing our code to see if its works. The updated method above will be applied. This is good. 
gpDoctor.introduceSelf();
dermDoctor.introduceSelf();

// we can even create a new radiologist doctor
let radioDoctor = Doctor("Dr Zappy", 50, 'radiologist');

// TEST#1: does the introduceSelf() function reference the same on all objects? Yes it does, because all object instances are refrencing the same prototype property in memory. this is awesome
console.log(radioDoctor.introduceSelf === gpDoctor.introduceSelf)