<<<<<<< HEAD
//1. Writing a function declaration
function ftnGreeting(salutation, user) {

    const msg = "Hi, " + salutation + " " + user;

    return msg;

}

const result = ftnGreeting("Mr.", "Jones");
console.log(result);

// 2. Function returning a sum of two values
// 2.1. Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters)
function ftnAdd(a = 0, b = 0) {
=======
// 1. Writing a function declaration
function ftnGreeting(salutation, user){

    const msg = `Hi, ${salutation} ${user}.`;
    
    return msg; 
}

console.log( ftnGreeting("Mr.", "Jones") );

// 2. Function returning a sum of two values
// 2.1. Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters)
function ftnAdd(a = 0, b = 0){
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
    const result = a + b;
    return result;
}

const sum = ftnAdd(10, 5);   // ftn will sent over 2 ARGUMENTS
console.log(sum);            // 15

<<<<<<< HEAD
const anothersum = ftnAdd(); // Managing default values
=======
const anothersum = ftnAdd(); // Passing in ZERO ARGUMENTS
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
console.log(anothersum);

// 3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {

<<<<<<< HEAD
    // Handle empty string values
    if (salutation.length == 0 && name.length == 0) {
        return "Please enter your salutation and name.";
    }

    // Otherwise,
=======
    // Handle empty string values 
    if(salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name.";

    // Otherwise, return the appropriate feedback
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting("Ms.", "Fareeda"));
<<<<<<< HEAD
console.log(anotherftnGreeting());   // No parameter is passed to function anotherftnGreeting

=======
console.log(anotherftnGreeting());                  // No parameter is passed to function anotherftnGreeting
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
