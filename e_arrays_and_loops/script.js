// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
<<<<<<< HEAD
console.log(myArray.length)
=======
console.log(myArray.length);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
<<<<<<< HEAD
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item * 10);

console.log(multiplyArrBy10); // [10, 20, 30, 40, 50, 60]

=======
const mappedArray = [1, 2, 3, 4, 5, 6]; 
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

const multiplyArrBy10 = mappedArray.map(item => item * 10); /* Short-hand of the arrow function */
console.log(multiplyArrBy10);

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];
<<<<<<< HEAD

const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel == "u");

console.log(filteredVowels); // ["a"]
=======
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

// ? re-write the example below using an arrow function (long-form)
const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
<<<<<<< HEAD
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
const descendNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendNums); // [6, 5, 4, 3, 2, 1]

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1); /* num.sort() achieves the same outcome */

console.log("ascendNums", ascendNums);


// Sort by ascending order
const ascendingNames = names.sort((a, b) => a > b ? 1 : -1);
console.log(ascendingNames); // ['Chris', 'James', 'Lenon', 'Max']
=======
// Implement your code here
const nums =  [1, 3, 2, 5, 4, 6]; 
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );
console.log("descendNums", descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1 ); /* num.sort() acheives the same: ascending sort */
console.log("ascendNums", ascendNums);

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNames);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

const ascendNames = names.sort();   /* By default, array.sort() sorts in ascending order */
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
<<<<<<< HEAD
const productOfNum = numbers.reduce((a, b) => a * b);
console.log(productOfNum);  // 24
=======
const product_of_arr = numbers.reduce((a, b) => a * b);     // 24
console.log(product_of_arr);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

// another approach of applying a reduce function of an array
// Implement your code here
<<<<<<< HEAD
const arr = new Array(1, 2, 3, 4);
function product(a, b) {
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct)

//append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];
teamList.push("Muhaimin");
console.log(teamList);

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];

console.log(mag7.shift());   // FB removed
console.log(mag7);           // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// Splice data (insert or replace data in an array)
const bballteam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steve Carr";

bballteam.splice(index, 0, newPlayer);
console.log(bballteam);

// Replace "Bill" with "Rodman"
bballteam[bballteam.length - 1] = "Rodman";
console.log(bballteam);


=======
const arr = new Array(2, 3, 4, 5);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];   // 0 - 3
teamList.push("Muhaimin");                                  // 0 - 4
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();                                             // intrinsically known to remove lst element
console.log(teamList.length);                               // 0 - 3 
console.log(teamList);                                      // 4 names

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());                                  // FB removed
console.log(mag7);                                          // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];             // 0 - 2
const index = 2;
const newPlayer = "Steve Carr";  
bballTeam.splice(index, 0, newPlayer);                      // ["Jordan", "Pippen", "Steve Carr", "Bill"]                           
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman");        // Replace "Bill" with "Rodman" 
console.log(bballTeam);

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
// const max = 10;
// for (let index = 0; index < max; index++) {
//     console.log(index + "\n");

// }
// i - for loops (Simulate a countdown for a for loop)

const max = 10;

for (let index = max; index >= 0; index--) {
    console.log(index);
}


// count till the conditon reaches 100 by 10s
const max100 = 100;

for (let index = 10; index <= max100; index = index + 10) {
    console.log(index);

}

// count down (10 – 1); ternary operation
for (let index = max; index >= 0; index--) {
    // if(condition) ? execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}

// Do a count up (1 - 10)
const max = 10;
for (let index = 1; index <= max; index++) {
   console.log(index);
}

// change the index, the condition and the step (variables that can change)
const max100 = 100;
for (let index = 10; index <= max100 ; index = index + 10) {
    console.log(index);                                         // 10, 20, 30, 40, 50 ... 100
}

// count down (10 - 1); TERNARY operation
for (let index = max; index >= 0 ; index--) {
    // if(condition) ? execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}


// ii - for-each loop
// Implement your code here
<<<<<<< HEAD
// 

const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});
=======
const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (do first, check later)
// Implement your code here
// let i = 0;

<<<<<<< HEAD
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);
=======
do {
    console.log(i); // print 0 to 10
    i++;
} while (i <= 5);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

<<<<<<< HEAD
let j =0;
while (j <= 10 ) {
    console.log(j);
    j++;
    
=======
let j = 0;
while (j <= 10) {
    console.log(j); // print 0 to 10
    j++;
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}