

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
//    console.log(`Computer Selection: ${randomPlay}`);
    // returns randomPlay to the function (example: "Scissors")
    return randomPlay;
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

// this function is the actual game
function game() {
    // set playerScore & computerScore as initial 0 value variables, meant to calculate score.
    let computerScore = 0;
    let playerScore = 0;

    // COMMENTING THIS OUT FOR THE REVISITING RPS EXERCISE // 
    // LINK HERE: https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors //
    // // start for loop for 5 rounds of games
    // for (let i = 0; i < 5; i++) {
    //     // set playRoundResult variable to the return value from the playRound function
    //     let playRoundResult = playRound(getPlayerSelection(), getComputerChoice());
    //     // start switch statement and the expression is the result from the playRound function
    //     switch (playRoundResult) {
    //         // if the result is a "tie" string, then print it's a tie and don't do anything
    //         case "tie":
    //             console.log("Tied. Do nothing.");
    //             break;
    //         // if the playRoundResult is "You lose"
    //         case "You lose":
    //             // increment computerScore by 1
    //             computerScore += 1;
    //             // print You lost.
    //             console.log("You lost.");
    //             break;       
    //         // if the playRoundResult is "You win!"             
    //         case "You win!":
    //             // increment playerScore by 1
    //             playerScore += 1;
    //             console.log("You win!");
    //             break;            
    //         default:
    //             break;
    //     }
    // }
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

function playRound(playerSelection) {
    let playerChoice = playerSelection;
    let computerSelection = getComputerChoice();
//    console.log(playerChoice);

    if(tie(playerChoice, computerSelection)) {
        console.log("You tie!");
        return "tie";
    }
    else if (win(playerChoice, computerSelection)) {
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
        return "You lose";
    }
    else if (lose(playerChoice, computerSelection)) {
        console.log(`You win! ${computerSelection} does not beat ${playerChoice}`);
        return "You win"
    }
    return
    // console.log(computerSelection);
}

const displayResults = document.querySelector('#displayResult');
const playerPick = document.querySelector('#playerChoice');
const computerPick = document.querySelector('#computerChoice');

const results = document.createElement('div');
displayResults.appendChild(playerPick);
displayResults.appendChild(computerPick);
displayResults.appendChild(results);


// rock paper scissors revisited //
const buttons = document.querySelectorAll('button');
// loop over all the buttons
buttons.forEach((button) => {
        button.addEventListener('click', function(event) {
            let playerSelection = button.id;
            let game = playRound(playerSelection);
            playerPick.textContent = `The player picked: ${playerSelection}`;
            results.textContent = `The result is: ${game}`;
        });
    });
// invoke function
game();
