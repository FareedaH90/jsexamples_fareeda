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


