

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

let playerScore = 0;
let computerScore = 0;

function game(playerSelection, computerChoice) {
    let playRoundResult = playRound(playerSelection, computerChoice);
    if (playerScore < 5) {
      if (playRoundResult === "tie") {
        console.log(`you tied`);
      }
      else if (playRoundResult === "You lose") {
        computerScore += 1;
        console.log(`comp score: ${computerScore}`);
        console.log(`player score: ${playerScore}`);
        console.log(`You lost.`);
      }
      else if (playRoundResult === "You win") {
        playerScore +=1;
        console.log(`comp score: ${computerScore}`);
        console.log(`player score: ${playerScore}`);
        console.log(`You win!`);
      }
      // else {
      //   break;
      // }
    }
//    break;
    return playRoundResult;
}

function playRound(playerSelection, computerChoice) {
    let playerChoice = playerSelection;
    if(tie(playerChoice, computerChoice)) {
        console.log("You tie!");
        return "tie";
    }
    else if (win(playerChoice, computerChoice)) {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        return "You lose";
    }
    else if (lose(playerChoice, computerChoice)) {
        console.log(`You win! ${computerChoice} does not beat ${playerChoice}`);
        return "You win"
    }
    return
    // console.log(computerSelection);
}

const displayResults = document.querySelector('#displayResult');
const playerPick = document.querySelector('#playerChoice');
const computerPick = document.querySelector('#computerChoice');
const displayScore = document.querySelector('#displayScore');

const gameResults = document.createElement('div');
displayResults.appendChild(playerPick);
displayResults.appendChild(computerPick);
displayResults.appendChild(gameResults);
displayResults.appendChild(displayScore);

// rock paper scissors revisited //
const buttons = document.querySelectorAll('button');
// loop over all the buttons
buttons.forEach((button) => {
        button.addEventListener('click', function(event) {
            let playerSelection = button.id;
            let computerChoice = getComputerChoice();
            let theGame = game(playerSelection, computerChoice);
            playerPick.textContent = `The player picked: ${playerSelection}`;
            computerPick.textContent = `The comp picked: ${computerChoice}`;
            gameResults.textContent = `The result is: ${theGame}`;
            displayScore.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
        });
    });
// invoke function
//game();
