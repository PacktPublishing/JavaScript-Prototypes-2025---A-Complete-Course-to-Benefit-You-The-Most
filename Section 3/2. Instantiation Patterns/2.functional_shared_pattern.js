// let's define an object that will contain shared properties and methods. Important: this is outside of the constructor function
let sharedMethods = {
    introduceSelf: function() {
        console.log(`Hi, I am ${this.name}, ${this.age} years old, and I can help you with ${this.expertise} related issues`)
    }
};

// create our constructor function ... you know the drill. 
function Doctor(name, age, expertise) {
    // set up our object
    let obj = {};
    // add properties to our object
    obj.name = name; 
    obj.age = age; 
    obj.expertise = expertise;
    // let's now access our sharedMethods object by scope (we are not using inheritance) 
    obj.introduceSelf = sharedMethods.introduceSelf;
    // don't forget to return the object
    return obj; 
}

// lets create a gp doctor
let gpDoctor = Doctor("Dr Wally", 48, "diagnosis");
gpDoctor.introduceSelf();

// lets create a dermatologist doctor
let dermDoctor = Doctor("Dr Bean", 38, "dermatology");
dermDoctor.introduceSelf;

// TEST #1: does the introdcueSelf() for gpDoctor equal the sharedMethods introduceSelf() ... answer is YES (true is returned)
console.log(gpDoctor.introduceSelf === sharedMethods.introduceSelf);

// BUT, let's now change the introduceSelf() function here
sharedMethods.introduceSelf = function() {
    console.log("NEW NEW NEW introduceSelf() function! Crazy!");
}

// now, lets create a new doctor
let radioDoctor = Doctor("Dr Zippy", 40, 'radiologist');

// TEST #2: does the introdcueSelf() for radioDoctor equal the sharedMethods introduceSelf() ... answer is YES (true is returned)
console.log(radioDoctor.introduceSelf === sharedMethods.introduceSelf);

// / TEST #3: does the introdcueSelf() for original gpDoctor equal the sharedMethods introduceSelf() ... answer is NO, not anymore (false is returned). Once you change the Sharedmethods, the pointer in memory breaks and a new memory pointer is created that is unique to gpDoctor. This is the main downside of functional-shared instantiation
console.log(gpDoctor.introduceSelf === sharedMethods.introduceSelf);

