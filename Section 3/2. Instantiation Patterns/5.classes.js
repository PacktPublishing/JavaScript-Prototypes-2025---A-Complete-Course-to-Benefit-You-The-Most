// using ES6 "class" keyword for instantiation
class Doctor {
    // every class has a constructor function, which is called automatically evertime you use the new keyword to create an object
    constructor(name, age, expertise) {
        this.name = name; 
        this.age = age; 
        this.expertise = expertise; 
        this.skills = ['qualified', 'inoculations'];
    }
    // everything defined outside here is added to the prototype
    introduceSelf() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
    }
}

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");
gpDoctor.introduceSelf();
