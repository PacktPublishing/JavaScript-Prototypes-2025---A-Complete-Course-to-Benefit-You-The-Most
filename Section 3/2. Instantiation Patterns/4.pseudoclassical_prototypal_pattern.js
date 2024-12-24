// as always, let's use JS's function keyword to create our constructor function
function Doctor(name, age, expertise) {
    this.name = name; 
    this.age = age; 
    this.expertise = expertise; 
    this.skills = ['qualified', 'inoculations'];
}
// now let's access the Doctor's prototype to add a common method shared accross all object instances
Doctor.prototype.introduceSelf = function() {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
};

// lets create a gp doctor
let gpDoctor = new Doctor("Dr Wally", 48, "diagnosis");

// lets create a dermatologist doctor
let dermDoctor = new Doctor("Dr Bean", 38, "dermatology");
dermDoctor.skills.push('acne', 'hair', 'skin');
console.log(dermDoctor.skills);

console.log(gpDoctor.skills);

