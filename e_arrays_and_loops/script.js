// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length)

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item * 10);

console.log(multiplyArrBy10); // [10, 20, 30, 40, 50, 60]



// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];

const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel == "u");

console.log(filteredVowels); // ["a"]


// iii - sort function of an array
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


// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const productOfNum = numbers.reduce((a, b) => a * b);
console.log(productOfNum);  // 24

// another approach of applying a reuduce function of an array
// Implement your code here
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


// ii - for-each loop
// Implement your code here
// 

const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here

// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

let j =0;
while (j <= 10 ) {
    console.log(j);
    j++;
    
}