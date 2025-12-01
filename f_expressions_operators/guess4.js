
const ans = 88;


const feedbackGuess = "Guess the number";
const feedbackQuit = "Press q or Q to quit"
const feedbackCorrect = "Your answer is correct.";
const feedbackWrong = "Your answer is wrong.";
const feedbackTooHigh = "Lower number please. Try again.";
const feedbackTooLow = "Higher number please. Try again.";
const feedbackEmpty = "Your answer is empty."


let userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();


// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput != 'q') {

    let correctAns = false;           // flag (instantiated as false)
    let feedback = "";                // message placeholder (instantiated as empty string "")

    switch (true) {
        case (Number(userInput) === ans || text2num(userInput) === ans):  
            correctAns = true;
            feedback = feedbackCorrect;
            break;

        case (!userInput):
            correctAns = false;
            feedback = feedbackEmpty;
            break;

        case (Number(userInput) > ans || text2num(userInput) > ans):
            correctAns = false;
            feedback = feedbackTooHigh;
            break;

        case (Number(userInput) < ans || text2num(userInput) < ans):
            correctAns = false;
            feedback = feedbackTooLow;
            break;

        default:
            correctAns = false;
            feedback = feedbackWrong;
    }
    
    alert(feedback);

    if (correctAns) break;

    userInput = prompt(feedbackGuess + " " + feedbackQuit).toLowerCase();
}

