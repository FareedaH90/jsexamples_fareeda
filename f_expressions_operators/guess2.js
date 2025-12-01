let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);

    if (Number(userInput) === 10 || userInput === "ten") {   // correct answer, provide an alert
        alert("You are correct");
        break;
    }

    else if (!userInput) {   // input empty string, provide an alert and prompt again
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }

    else {   // wrong answer, provide an alert and prompt again
        alert("Answer incorrect.");
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
}

// if the user enter a wrong answer, provide an alert as well
// if the user enters the correct answer, provide an alert

// if the user puts in an empty string, provide an alert

// if the user enter a wrong answer, provide an alert as well

// if (userInput == ans) { // if user's answer is a number 10

//     alert("You are correct!!");
//     break;

// } else if (!userInput) { // else if the user's input is undefined == false (!false == true)

//     userInput = prompt("Your answer is empty. Please try again.");

// }
// else {

//     userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");

// }

