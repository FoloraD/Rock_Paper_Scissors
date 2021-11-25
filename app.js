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

//function that computer randomly selects from array of ‘Rock’, ‘Paper’ or ‘Scissors’ and return a value. 

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = options[Math.floor(Math.random() * 3)]; //generates a random number between 0 - 2
    return randomNumber; // will return a random element from the array above
} 
// function to determine result of playing 1 round.
function determineResult(playerSelection, computerSelection) {
   
    if (playerSelection === computerSelection) {
        return ['draw', playerSelection, computerSelection]
    }
   
    //winingCombos - stores the wining combinations in a nested array. 
    //Each nested array -[ [ 0 ~ player selection ], [1~ computer selection], [2 ~ winning item ]
    const winningCombos = [ ['scissors', 'paper', 'scissors'], ['rock', 'scissors', 'rock'],  [ 'paper', 'rock', 'paper']  ] // each array contain the winning combos for the game. eg scissors beats paper, so scissors win
    
    // For loop: start at [0][0] loop through the winningCombos arrays to compare player selection and computer selection. conditions set for when player wins or if computer wins.
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

  

  //TO DO List 
  // 1. write a function to keep score (0 -5)
  //2. & improve on the below logic. less repetition and cleaner code
  // use this `${result[0]} wins!, ${result[1]} beats ${result[2]}` // string interpolation for game out come.
  // add event listeners for game

  /**  Rock  =>  Beats Scissors => Loses to Paper
    Paper =>  Beats Rock => Loses to Scissors
    Scissors => Beats Paper => Loses to Rock **/

//player win outcomes

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
   updateResult("It's a draw! Play again")
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
 // function that updates the result on the game board
function updateResult(resultString) { 
    document.getElementById('result').innerHTML = resultString // adds the game outcome to the game board screen. on the results section.
    document.getElementById('result').style.color ="red"; // update this section - colours for outcomes red-loose, green-win, black-draw
}

// play 5 round game
};

const playerSelection = 'scissors'; // add function for player choice
 const computerSelection = computerPlay() 
 console.log(playRound(playerSelection, computerSelection)) // play 1 round & shows result on console
