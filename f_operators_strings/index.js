<<<<<<< HEAD
// 1. Trim a string 

let wordWithTrim = "    FSD    ";
=======
// 1. Trim a string
let wordWithTrim = "   FSD   ";
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

<<<<<<< HEAD
//2. toString (convery a number to a string)
let statusCode = 404;          // Number
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

//3. TypeCast boolean data type to a string
let boolVal = true;   // a boolean does not have a toString
console.log(typeof String(boolVal).toString());

//4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");   // type returned?

console.log(splitName.length);   // ["John", "Doe", "Smith"]
console.log(`Welcome ${splitName[0]}, to our site!`);

//  5. Split a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);
=======
// 2. toString (convert a number to a string)
let statusCode = 404;       // Number
console.log(typeof statusCode.toString());
console.log(typeof String(statusCode).toString());

// 3. TypeCast boolean data type to a string
let boolVal = true; 
console.log(typeof String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe Smith";
let splitName = fullName.split(" ");
console.log(splitName.length); ["John", "Doe"];
console.log(`Welcome ${splitName[0]} ${splitName[1]}, to our site!`);

// 5. Spilt a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);    // ["Hello", "World", "JS"]
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

let splitWordIndex0 = splitInstances[0].split("");
console.log(splitWordIndex0);

<<<<<<< HEAD
// 6. Slidate the string based on today's date and render a custom information// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);        // new instance of Date
let splitToday = today.toDateString();   // eee mmm dd yyyy
splitToday = splitToday.split(" ");      // ["Fri", "Nov", "28", "2025"]

let msg = "";

switch (splitToday[0]) {
    case "Mon":
        msg = "Monday Blues";
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        msg = "Work, work!";
        break;
    case "Fri":
        msg = "TGIF!";
        break;
    default:
        msg = "Weekend is here";
=======
// 6. Slidate the string based on today's date and render a custom message
const currDate = Date.now();
const today = new Date(currDate);       // new instance of Date
let splitToday = today.toDateString();  // eee mmm dd yyyy
splitToday = splitToday.split(" ");     // ["Fri", "Nov", "28", "2025"]    

let msg = "";

switch(splitToday[0]){
    case "Mon":
            msg = "Monday Blues";
            break;
    case "Tue":
    case "Wed":
    case "Thu":
            msg = "Work, work!";
            break;
    case "Fri":
            msg = "TGIF";
            break;
    default:
            msg = "Weekend is here";
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

console.log(msg);

<<<<<<< HEAD


=======
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
