// this is the most simple way to create a constructor function in JS
function Doctor(name, age, expertise) {
    // define our object
    let obj = {};
    obj.name = name; 
    obj.age = age; 
    obj.expertise = expertise; 
    obj.introduceSelf = function() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`);
    }
    // don't forget to return the object
    return obj; 
}

// lets create a gp doctor
let gpDoctor = Doctor("Dr Wally", 48, "diagnosis");

// lets create a dermatologist doctor
let dermDoctor = Doctor("Dr Bean", 38, "dermatology");
dermDoctor.introduceSelf = function() {
    console.log("HI, I am a new introduceSelf function");
}

// dermDoctor.introduceSelf();
gpDoctor.introduceSelf();

