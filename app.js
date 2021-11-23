/**  function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. **/

function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options [randomNumber];
}
  console.log(computerPlay() )
    
   
  

/** function that plays a single round of Rock Paper Scissors. **/
/** The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock" **/
/** Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation). **/
