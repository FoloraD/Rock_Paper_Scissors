/**  function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. **/

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = options[Math.floor(Math.random() * 3)]; //generates a random number between 0 - 2
    return randomNumber; // will return a random element from the array above
} 

//Play game
function playRound (playerSelection, computerSelection) {

// player win outcomes

     if (playerSelection === 'scissors' && computerSelection === 'paper') {  
                return('You win! scissors beats paper');

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return('You win! Rock beats scissors');

    } else if (playerSelection === 'paper ' && computerSelection === 'rock') {
            return('You win! Paper beats rocks');

//Draw outcomes
  } else if (playerSelection === computerSelection) {
    return('Draw'); } 

//computer win outcomes
 else if ( computerSelection === 'scissors' && playerSelection === 'paper') {
     return('You loose! Scissors beats paper');

 } else if ( computerSelection === 'rock' && playerSelection === 'scissors') {
    return('You loose! Rock beats scissors');

 }else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return( 'You loose! Paper beats rock');
 }


};

const playerSelection = 'paper';
 const computerSelection = computerPlay()  // change to computer play after completing function
 console.log(playRound(playerSelection, computerSelection))
