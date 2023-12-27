//Create a function getComputerChoice which returns a random selection from the choices: "rock", "paper", "scissors"
function getComputerChoice(){
    //Generate a random number between 0 and 1 and store that float in the variable randNumber
    const randNumber = Math.random();
    //If randNumber is less than 0.33, return "rock"
    if (randNumber < 0.33) {
        computerChoice.setAttribute('src', 'images/Rock-Flat-icon.png')
        return "rock"
    }
    //If randInt is greater than or equal to 0.33 but less than 0.66, return "paper"
    else if (randNumber < 0.66) {
        computerChoice.setAttribute('src', 'images/Paper.png')
        return "paper";
    }
    //If randNumber is greater than or equal to 0.66 but less than 1, return "scissors"
    else {
        computerChoice.setAttribute('src', 'images/Scissor-icon.png')
        return "scissors";
    }

}

//Create a function playRound that plays a single round and takes the input args: playerSelection and computerSelection
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    //Check which cases would result in a win, tie, or loss for every computer choice possibily using nested if statements
    const playerChoice = playerSelection.toLowerCase()
    if (computerSelection === "rock"){
        if (playerChoice === "rock"){
            result.textContent = ("Tie! Both chose rock. Replay.");
        }
        else if (playerChoice === "paper"){
            result.textContent = (`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`) ;
            playerScore++
        }
        else {
            result.textContent = (`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }

    }
    else if (computerSelection === "paper"){
        if (playerChoice === "rock"){
            result.textContent = (`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }
        else if (playerChoice === "paper"){
            result.textContent = ("Tie! Both chose paper. Replay.");
        }
        else {
            result.textContent = (`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`);
            playerScore++
        }

    }
    else if (computerSelection === "scissors") {
        if (playerChoice === "rock"){
            result.textContent = (`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`) ;
            playerScore++
        }
        else if (playerChoice === "paper"){
            result.textContent = (`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }
        else {
            result.textContent = ("Tie! Both chose scissors. Replay.");
        }
    }
    playerScoreDisp.textContent = `Player: ${playerScore}`
    computerScoreDisp.textContent = `Computer: ${computerScore}`
}
//Initialize the scores in the variables playerScore and computerScore
let playerScore = 0;
let computerScore = 0;
//Make the scores section dynamic to show the results
const result = document.querySelector(".score > #results")
const  playerScoreDisp = document.querySelector(".playerScore")
const  computerScoreDisp = document.querySelector(".computerScore")
playerScoreDisp.textContent = `Player: ${playerScore}`
computerScoreDisp.textContent = `Computer: ${computerScore}`
//Display the computer's choice
const computerChoice = document.querySelector('.computer-choice')
//Make buttons reponsive to clicks
const rockButton = document.querySelector("#rock-btn")
const paperButton = document.querySelector("#paper-btn")
const scissorButton = document.querySelector('#scissor-btn')
rockButton.addEventListener('click', function(){playRound("rock", getComputerChoice())})
paperButton.addEventListener('click',function(){playRound("paper", getComputerChoice())})
scissorButton.addEventListener('click', function(){playRound("scissors", getComputerChoice())})

