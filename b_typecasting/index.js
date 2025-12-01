// 1. Type Casting

// Converting values to numbers using the Number object
<<<<<<< HEAD
console.log(Number("3.142"));
console.log(Number(Math.PI));
console.log (Number("   "));
console.log(Number(""));
console.log( Number("88 88"));
console.log(Number("Steve"));


//Convert values to strings  using the Srting object
console.log(String(new Date()));
console.log(String("98765"));
console.log(String(98765));

//Converting  value into boolean
console.log(Boolean("1"));
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("John"));

// lets try a trivia
// try the THREE scenarios:
//1. Use " " in the prompt
//2. Use "your name" in the prompt
//3. Use "" (an empty string) in the prompt
function greetUser(){
    let userName = prompt("Please enter your name:");
    
    if(userName.trim()){    // "  " will be trimmed, guard rail to prevent spaces being used
        alert(`Welcome to FSD ${userName}!!!`);
    }else{
        alert("We did not receive your name.");
    }
}
 
greetUser();
=======
console.log(Number("3.142"));   // 3.142
console.log(Number(Math.PI));   // 3.141592653589793
console.log(Number("     "));   // 0
console.log(Number(""));        // 0
console.log(Number("88 88"));   // NaN (not a number)
console.log(Number("Steve"));   // NaN (not a number)

// Converting values to strings using the String object
console.log(new Date());            // Unformatted of today's date and time 
console.log(String(new Date()));    // Formatted (to String) of today's date and time
console.log(String("98765"));       // "98765"
console.log(String(98765));         // "98765"

// Converting values into boolean
console.log(Boolean("1"));      // true (truthy response)
console.log(Boolean(1));        // true
console.log(Boolean("0"));      // true (truthy response)
console.log(Boolean(0));        // false
console.log(Boolean(" "));      // true (truthy response)
console.log(Boolean(""));       // false (falsy response)
console.log(Boolean("John"));   // true
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
