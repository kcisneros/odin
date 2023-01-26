// Assignment from the Odin Project. https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

function randomIndex(choiceArray) {
    // randomIndexWithDecimal variable is the result of `Math.random()` times the length of the array. This returns a value between 0 & 1
    let randomIndexWithDecimal = (Math.random() * choiceArray.length);
    // randomIndex rounds down the rpsRandomIndexWithDecimal value to get a whole number
    // and returns a randomIndex to the function
    return Math.floor(randomIndexWithDecimal);
}

function getComputerChoice() {
    // setting a variable to an array for the three values the computer can pick, "Rock", "Paper", or "Scissors"
    let rps = ["Rock", "Paper", "Scissors"];
    let randomPlay = rps[randomIndex(rps)];
    // prints the selection in console.log
    console.log(`Computer Selection: ${randomPlay}`);
    // returns randomPlay to the function (example: "Scissors")
    return randomPlay;
}

// this function takes the player input and titleizes it.
function titleizePlayerSelection(string) {
    let titleizedSelection = string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
    return titleizedSelection;
}

// consider validating player selection input to only accept items in array
// function validatePlayerInput(playerSelection) {} // to-do

// this function gets the player input.
function getPlayerSelection() {
    let playerSelection = prompt("Please enter 'rock', 'paper', or 'scissors'");
    // call validatePlayerInput(playerSelection)
    console.log(`Player selection: ${titleizePlayerSelection(playerSelection)}`);
    return playerSelection;
}

function tie(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === "Rock" || 
            computerSelection === "Paper" && playerSelection === "Paper" || 
            computerSelection === "Scissors" && playerSelection === "Scissors") {
        return true;
    } else {
        return false;
    }
}

function win(playerSelection, computerSelection) {
    if (computerSelection === "Paper" && playerSelection === "Rock" || 
            computerSelection === "Rock" && playerSelection === "Scissors" || 
            computerSelection === "Scissors" && playerSelection === "Paper") {
        return true;
    } else {
        return false;
    }
}

function lose(playerSelection, computerSelection) {
    if (computerSelection === "Scissors" && playerSelection === "Rock" || 
            computerSelection === "Rock" && playerSelection === "Paper" || 
            computerSelection === "Paper" && playerSelection == "Scissors") {
        return true;
    } else {
        return false;
    }
}

// this function takes two params, player selection and computer selection, and it compares them to determine if it's a win, loss, or tie for the player.
function playRound(playerSelection, computerSelection) {
    // set fixCasePlayerSelection variable to the return value of titleizePlayerSelection function
    let titledizedPlayerSelection = titleizePlayerSelection(playerSelection);
    
    // this logic is for if the game is a tie
    if (tie(titledizedPlayerSelection, computerSelection)) {
        console.log("You tie!");
        return "tie";
    }
    // this is for if the computer wins
    else if (win(titledizedPlayerSelection, computerSelection)) {
        console.log(`You lose! ${computerSelection} beats ${titledizedPlayerSelection}.`);
        return "You lose";
    }
    //this is for if the player wins
    else if (lose(titledizedPlayerSelection, computerSelection)) {
        console.log(`You win! ${computerSelection} does not beat ${titledizedPlayerSelection}.`);
        return "You win!";
    }
    return 
}

// this function is the actual game
function game() {
    // set playerScore & computerScore as initial 0 value variables, meant to calculate score.
    let computerScore = 0;
    let playerScore = 0;
    // start for loop for 5 rounds of games
    for (let i = 0; i < 5; i++) {
        // set playRoundResult variable to the return value from the playRound function
        let playRoundResult = playRound(getPlayerSelection(), getComputerChoice());
        // start switch statement and the expression is the result from the playRound function
        switch (playRoundResult) {
            // if the result is a "tie" string, then print it's a tie and don't do anything
            case "tie":
                console.log("Tied. Do nothing.");
                break;
            // if the playRoundResult is "You lose"
            case "You lose":
                // increment computerScore by 1
                computerScore += 1;
                // print You lost.
                console.log("You lost.");
                break;       
            // if the playRoundResult is "You win!"             
            case "You win!":
                // increment playerScore by 1
                playerScore += 1;
                console.log("You win!");
                break;            
            default:
                break;
        }
    }
    // calculate the winner of all rounds. if the computerScore is greater than playerScore, computer won.
    if (computerScore > playerScore) {
        console.log("Computer won.");
    }
    // else if the playerScore is greater than the computerScore, the player wins.
    else if (playerScore > computerScore) {
        console.log("Player won");
    }
    // else just print tied.
    else {
        console.log("Tied!");
    }
}

// invoke function
game();
