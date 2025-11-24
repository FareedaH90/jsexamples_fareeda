// 1. Type Casting

// Converting values to numbers using the Number object
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
