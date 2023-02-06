// Assignment from the Odin Project. https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

// https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors#assignment

// global variables
let playerScore = 0;
let computerScore = 0;

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
    return rps[randomIndex(rps)];
//    return randomPlay;
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

function game(playerSelection, computerChoice) {
  let playRoundResult = '';
    if (playerScore == 5 || computerScore == 5){
//      console.log(`in the first if`);
      if (playerScore > computerScore) {
//        console.log(`final winner is: you.`);
        return "You are the final winner!";
      }
      else {
//        console.log(`computer is the final winner`);
        return "Computer is the final winner!";
      }
    }
    else {
      playRoundResult = playRound(playerSelection, computerChoice);
      if (playRoundResult === "This round is a tie") {
      }
      else if (playRoundResult === "You lose this round") {
        computerScore += 1;
      }
      else if (playRoundResult === "You win this round") {
        playerScore +=1;
      }
    }
    return playRoundResult;
}

function playRound(playerSelection, computerChoice) {
    let playerChoice = playerSelection;
    if(tie(playerChoice, computerChoice)) {
        return "This round is a tie";
    }
    else if (win(playerChoice, computerChoice)) {
        return "You lose this round";
    }
    else if (lose(playerChoice, computerChoice)) {
        return "You win this round"
    }
    return
}

const displayResults = document.querySelector('#displayResult');
const playerPick = document.querySelector('#playerChoice');
const computerPick = document.querySelector('#computerChoice');
const displayScore = document.querySelector('#displayScore');

const gameResults = document.createElement('div');
displayResults.appendChild(gameResults);

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
            gameResults.textContent = `${theGame}`;
            displayScore.textContent = `Computer: ${computerScore}, You: ${playerScore}`;
        });
    });

