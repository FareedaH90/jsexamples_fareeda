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
    const result = a + b;
    return result;
}

const sum = ftnAdd(10, 5);   // ftn will sent over 2 ARGUMENTS
console.log(sum);            // 15

const anothersum = ftnAdd(); // Managing default values
console.log(anothersum);

// 3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {

    // Handle empty string values
    if (salutation.length == 0 && name.length == 0) {
        return "Please enter your salutation and name.";
    }

    // Otherwise,
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting("Ms.", "Fareeda"));
console.log(anotherftnGreeting());   // No parameter is passed to function anotherftnGreeting

