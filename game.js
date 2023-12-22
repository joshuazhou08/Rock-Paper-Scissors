//Create a function getComputerChoice which returns a random selection from the choices: "rock", "paper", "scissors"
function getComputerChoice(){
    //Generate a random number between 0 and 1 and store that float in the variable randNumber
    const randNumber = Math.random();
    //If randNumber is less than 0.33, return "rock"
    if (randNumber < 0.33) {
        return "rock"
    }
    //If randInt is greater than or equal to 0.33 but less than 0.66, return "paper"
    else if (randNumber < 0.66) {
        return "paper";
    }
    //If randNumber is greater than or equal to 0.66 but less than 1, return "scissors"
    else {
        return "scissors";
    }

}

//Create a function playRound that plays a single round and takes the input args: playerSelection and computerSelection
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    //Check which cases would result in a win, tie, or loss for every computer choice possibily using nested if statements
    const playerChoice = playerSelection.toLowerCase()
    if (computerSelection === "rock"){
        if (playerChoice === "rock"){
            console.log("Tie! Both chose rock. Replay.");
            return playRound(prompt("Rock, paper, scissors!"), getComputerChoice());
        }
        else if (playerChoice === "paper"){
            console.log(`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`) ;
            playerScore++
        }
        else {
            console.log(`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }

    }
    else if (computerSelection === "paper"){
        if (playerChoice === "rock"){
            console.log(`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }
        else if (playerChoice === "paper"){
            console.log("Tie! Both chose paper. Replay.");
            return playRound(prompt("Rock, paper, scissors!"), getComputerChoice());
        }
        else {
            console.log(`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`);
            playerScore++
        }

    }
    else if (computerSelection === "scissors") {
        if (playerChoice === "rock"){
            console.log(`You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection}`) ;
            playerScore++
        }
        else if (playerChoice === "paper"){
            console.log(`You lose! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} loses to ${computerSelection}`);
            computerScore++
        }
        else {
            console.log("Tie! Both chose scissors. Replay.");
            return playRound(prompt("Rock, paper, scissors!"), getComputerChoice());
        }
    }
}
//Initialize the scores in the variables playerScore and computerScore
let playerScore = 0;
let computerScore = 0;
//Call all our functions and play the game until the player no longer wants to
let keepGoing = true;
while (keepGoing) {
    playRound(prompt("Rock, paper, scissors!"), getComputerChoice());
    let playAgain = prompt("Do you want to play again?");
    //check if the player said no
    keepGoing = playAgain.toLowerCase() === "no" ? false : true;
}
console.log(`Computer Final Score: ${computerScore}`)
console.log(`Your Final Score: ${playerScore}`)