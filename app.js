//0.... create player and computer variables & Dom id's

let playerScore = 0;
let computerScore = 0;

//Computer input / Player input /game result//
const computerChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('player-choice')
const resultsDisplay = document.getElementById('results')

//rock / paper / scissor/ reset buttons//

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const resetBtn = document.getElementById("reset");

/** 1.... function that computer randomly selects from array of ‘Rock’, ‘Paper’ or ‘Scissors’ and return a value. **/

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = options[Math.floor(Math.random() * 3)]; //generates a random number between 0 - 2
    return randomNumber; // will return a random element from the array above
} 
// creat function for winner
function determineResult(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection) {
        return ['draw', playerSelection, computerSelection]
    }
   
    //array selection - 1st selection is player, 2nd computer, 3rd is winner
    const winningCombos = [ ['scissors', 'paper', 'scissors'], ['rock', 'scissors', 'rock'],  [ 'paper', 'rock', 'paper']  ] // 3 winning combos
    for (let index = 0; index < winningCombos.length; index++) {
        if (winningCombos[index][0] === playerSelection && winningCombos[index][1] === computerSelection) {
            return ['you', playerSelection, computerSelection ]  
            //player is winner here
        } 
        if (winningCombos[index][1] === playerSelection && winningCombos[index][0] === computerSelection) {
            return ['computer', computerSelection, playerSelection]
            //computer is winner here
        }
    }
}

//2.... function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection) {
  const result = determineResult(playerSelection, computerSelection)
  console.log(result) // returns values in array

  `${result[0]} wins!, ${result[1]} beats ${result[2]}` // string interpolation

  //How do we keep score & remove below logic.
// player win outcomes

     if (playerSelection === 'scissors' && computerSelection === 'paper') {  
                //return('You win! scissors beats paper');
                playerScore++;
              updateResult('You win! scissors beats paper')
            document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            //return('You win! Rock beats scissors');
            playerScore++;
            updateResult('You win! Rock beats scissors')
            document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

    } else if (playerSelection === 'paper ' && computerSelection === 'rock') {
           // return('You win! Paper beats rocks');
           playerScore++;
       updateResult('You win! Paper beats rocks')
    document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

//Draw outcomes
  } else if (playerSelection === computerSelection) {
   // return('Draw'); 
   updateResult("it's a draw! Play again")
} 

//computer win outcomes
 else if ( computerSelection === 'scissors' && playerSelection === 'paper') {
     //return('You loose! Scissors beats paper');
     computerScore++;
   updateResult('You loose! Scissors beats paper')
   document.getElementById("computer-score").innerHTML = computerChoice  // adds points to computer scoreboard

 } else if ( computerSelection === 'rock' && playerSelection === 'scissors') {
    //return('You loose! Rock beats scissors');
    computerScore++;
    updateResult('You loose! Rock beats scissors');

 }else if (computerSelection === 'paper' && playerSelection === 'rock') {
    //return( 'You loose! Paper beats rock');
    computerScore++;
   updateResult('You loose! Paper beats rock')
 }

 //select game winner
 if (playerChoice == 5) {
     updateResult("you have won the game")

 } else if (computerChoice == 5) {
        updateResult("The computer has won the game") 
 }
 
function updateResult(resultString) { 
    document.getElementById('result').innerHTML = resultString
    document.getElementById('result').style.color ="black";
}

// play 5 round game
};

const playerSelection = 'scissors';
 const computerSelection = computerPlay() // change to computer play after completing function/ computerPlay() 
 console.log(playRound(playerSelection, computerSelection)) // play 1 round
