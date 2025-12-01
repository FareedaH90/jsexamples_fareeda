let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);

    if (Number(userInput) === 10) {      
        alert("You are correct");
        break;
    }

    else if (!userInput) {               
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }

    else {                               
        // provide hints to the user (on whether the answer is above or below the actual answer)
        const msg = userInput < ans ? "Higher" : "Lower";

        alert(`Answer incorrect. ${msg} number please.`);
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
}


