<<<<<<< HEAD
// 1. Primitive types

let pi = 3.142;    // variable with number of 3.142
console.log(pi);

let strValue = "Hello"; //variable with a value "Hello"
console.log(strValue);

let boolValue = true;
console.log(typeof boolValue);

let nullValue = null;
console.log(typeof nullValue);

let undefinedValue;
console.log(typeof undefinedValue)

let arr = ["a", "b", "c"]
console.log(arr);

let faang = new Array();
faang[0] = "Facebook";
faang[1] = "Amazon";

console.log(faang);
console.log(faang[0]);

let person = {name: "Sam" , age: 42};
console.log("Name: ",person.name);
console.log("Age: ",person.age);

let vehicle = new Object();
vehicle.name = "Suzuki";
vehicle.model = "Swift";
vehicle.color= "Blue";


let announce = function() {console.log("Hello JS");};
announce();

let announce2 = () => {
  console.log("Hello JS again.");
}

announce2();

// 3. Declaring variables using let, const and var
// Constant Variables
const PI = 3.14159;     // Declare a immutable variable called PI
//PI = 3.142;           // Update PI's value because it is mutable
console.log(PI);      // Output: 3.142

// let variables
function greet(){
    let greeting = "Welcome to FSD leaners";
    console.log(greeting);
}

greet();

//var variable
var localMsg = "Welcome to FSD Developers"

function welcome(){
    var localMsg = "Welcome to Full Stack development";
    console.log(localMsg);
}

console.log(localMsg);


=======
// 1. Primitive Types

let pi = 3.142;                     // Variable with a number of 3.142
console.log(typeof pi);

let strValue = "Hello";             // Variable (camelCase naming convention) with a value of "Hello"
console.log(typeof strValue);

let boolValue = true;                   // Variable storing a boolean of true
console.log(typeof boolValue);

let nullValue = null;                   // Variable of null value (object)
console.log(typeof nullValue);

let undefinedValue;                     // Variable that is declared BUT uninitislised
console.log(typeof undefinedValue)

// 2. Non-primitive Types

let arr = ["a", "b", "c"];              // An array of 3 elements, starting index: 0, 1, 2
console.log(arr);

let faang = new Array();                // Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook";                  // Store the value of "Facebook" to index position 0 of the array 
faang[1] = "Amazon";                    // Store the value of "Amazon" to index position 1 of the array
console.log(faang);                     // Print the array

console.log(faang[0]);                  // Accessing the value from index position 0 from array: faang
console.log(faang[1]);                  // Accessing the value from index postion 1 from array: faang

let person = {name: "Sam", age: 42};    // Create a Javascript Object with 2 key values pairs (name, age)
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);

let vehicle = new Object();             // Declaring a new INSTANCE of an Object called vehicle
vehicle.name = "Suzuki";                // Giving the vehicle object a PROPERTY called "name" and assigning it a value: "Suzuki"
vehicle.model = "Swift";                // Giving the vehicle object a PROPERTY called "model" and assigning it a value: "Swift"
vehicle.color = "Blue";                 // ? what other related properties can be associated with the vehicle object

let announce = function(){console.log("Hello JS");};        // Declaring an new object "announce()" as a function
announce();                                                 // Invoke and execute the new object "announce()"

let announce2 = () => { console.log("Hello JS again."); }   // Declaring a new object "announce2" as an ARROW function
announce2();                                                // Invoke and execute the arrow function "announce2()"

// 3. Declaring variables using let, const and var
// Const keyword
const PI = 3.14159;                                         // Declare an immutable variable called PI
// PI = 3.142;                                              // Update PI's value will NOT be possible


// let keyword
function greet(){
    let greeting = "Welcome FSD learners";                  // variable let is locally scoped, only accessible in the function
    console.log(greeting);
}

// console.log(greeting);                                   // ? is the variable greeting accessible here?

// var keyword (NOT advisble to use)
var localMsg = "Welcome FSD Developers";                    // I have localMsg here

function welcome(){
    var localMsg = "Welcome to Full Stack Development";     // I also have localMsg here
    console.log(localMsg);
}

console.log(localMsg);                                      // Naturally, the compile uses localMsg from line 61
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
