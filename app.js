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

//2.... function that plays a single round of Rock Paper Scissors
function playRound (playerSelection, computerSelection) {

// player win outcomes

     if (playerSelection === 'scissors' && computerSelection === 'paper') {  
                //return('You win! scissors beats paper');
                playerScore++;
                document.getElementById('results').innerHTML = 'You win! scissors beats paper'; // show this message on the results part of the page.
            document.getElementById('results').style.color ="black";
            document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            //return('You win! Rock beats scissors');
            playerScore++;
            document.getElementById('results').innerHTML = 'You win! Rock beats scissors'; // show this message on the results part of the page.
            document.getElementById('results').style.color ="black";
            document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

    } else if (playerSelection === 'paper ' && computerSelection === 'rock') {
           // return('You win! Paper beats rocks');
           playerScore++;
           document.getElementById('results').innerHTML = 'You win! Paper beats rocks'; // show this message on the results part of the page.
    document.getElementById('results').style.color ="black";
    document.getElementById("player-score").innerHTML = playerScore   // adds points to player scoreboard

//Draw outcomes
  } else if (playerSelection === computerSelection) {
   // return('Draw'); 
   document.getElementById('results').innerHTML ="it's a draw! Play again"; // show this message on the results part of the page.
   document.getElementById('results').style.color ="black";
} 

//computer win outcomes
 else if ( computerSelection === 'scissors' && playerSelection === 'paper') {
     //return('You loose! Scissors beats paper');
     computerScore++;
    document.getElementById('results').innerHTML = 'You loose! Scissors beats paper'; // show this message on the results part of the page.
   document.getElementById('results').style.color ="black";
   document.getElementById("computer-score").innerHTML = computerChoice  // adds points to computer scoreboard

 } else if ( computerSelection === 'rock' && playerSelection === 'scissors') {
    //return('You loose! Rock beats scissors');
    computerScore++;
    document.getElementById('results').innerHTML = 'You loose! Rock beats scissors'; // show this message on the results part of the page.
    document.getElementById('results').style.color ="black";
 }else if (computerSelection === 'paper' && playerSelection === 'rock') {
    //return( 'You loose! Paper beats rock');
    computerScore++;
    document.getElementById('results').innerHTML = 'You loose! Paper beats rock'; // show this message on the results part of the page.
    document.getElementById('results').style.color ="black";
 }

 //select game winner
 if (playerChoice == 5) {
     document.getElementById('result').innerHTML = "you have won the game"
     document.getElementById('results').style.color ="black";
     
 } else if (computerChoice == 5) {
        document.getElementById('result').innerHTML = "The computer has won the game"
        document.getElementById('results').style.color ="black";
    

 }
 


// play 5 round game
};

const playerSelection = 'scissors';
 const computerSelection = 'paper' // change to computer play after completing function/ computerPlay() 
 console.log(playRound(playerSelection, computerSelection)) // play 1 round
