// To understand dunder proto, why don't we try and conceptualize it with code

// Step 1, add dunder proto to the Object.prototype
Object.defineProperty(Object.prototype, '__proto__', {
    // Step 2, define the default getter
    get() {
        // return the object that you are calling __proto__ on
        let relevantObject = Object(this);
        // now, return the prototype of the object
        return Object.getPrototypeOf(relevantObject);
    },
    // Step 3, define the setter 
    set(protoObject) {
        // ... do some checks first (this has to be an object, can't be null, etc.)
        Object.setPrototypeOf(this, protoObject);
        // ... more error checking
    }
});

// **********************
// apply above code
// define the prototype object
let ghostProto = {
    sound: "Boo"
};

// set up your object
let ghost = {};

// define its prototype property using old-school __proto__
ghost.__proto__ = ghostProto;

// get its prototype using the old-school __proto__ 
console.log(ghost.__proto__); 
