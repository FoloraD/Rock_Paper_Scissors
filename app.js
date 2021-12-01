function localGame() {
  //0.... create player and computer variables & Dom id's
  //Set computer & player scores to 0. These will get updated when playing the game.
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  const scores = { // object to keep game scores
    player: 0,
    computer: 0,
  };
  // Show on the DOM the Computer input / Player input /game result//
  const computerChoice = document.getElementById("computer-choice");
  const playerChoice = document.getElementById("player-choice");
  const resultsDisplay = document.getElementById("results");

  //Player selection options for rock/paper/scissors

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const resetBtn = document.getElementById("reset");
  const gameRound = document.getElementById("round");

  //function that computer randomly selects from array of ‘Rock’, ‘Paper’ or ‘Scissors’ and return a value.

  function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = options[Math.floor(Math.random() * 3)]; //generates a random number between 0 - 2
    return randomNumber; // will return a random element from the array above
  }
  // function to determine result of playing 1 round.
  function determineResult(playerSelection, computerSelection) {
    console.log(`player selected: "${playerSelection}"`);
    console.log(`Computer selected: "${computerSelection}"`);

    if (playerSelection === computerSelection) {
      return ["draw", playerSelection, computerSelection];
    }

    //winingCombos - stores the wining combinations in a nested array.
    //Each nested array -[ [ 0 ~ player selection ], [1~ computer selection], [2 ~ winning item ]
    const winningCombos = [
      ["scissors", "paper", "scissors"],
      ["rock", "scissors", "rock"],
      ["paper", "rock", "paper"],
    ]; // each array contain the winning combos for the game. eg scissors beats paper, so scissors win

    // For loop: start at [0][0] loop through the winningCombos arrays to compare player selection and computer selection. conditions set for when player wins or if computer wins.
    for (let index = 0; index < winningCombos.length; index++) {
      if (
        winningCombos[index][0] === playerSelection &&
        winningCombos[index][1] === computerSelection
      ) {
        return ["player", playerSelection, computerSelection];
        //player is winner of this round
      }
      if (
        winningCombos[index][1] === playerSelection &&
        winningCombos[index][0] === computerSelection
      ) {
        return ["computer", computerSelection, playerSelection];
        //computer is winner of this round
      }
    }
  }

  //2.... function that plays 5 rounds of Rock Paper Scissors
  function playRound(playerSelection) {
    if (round === 5) {
      // check if round is 5, if yes then exit game. update ui to say who won.
      console.log("game over");
      return;
    }

    const computerSelection = computerPlay();
    const result = determineResult(playerSelection, computerSelection);
    console.log(result); // returns values in array

    if (result[0] === "draw") {
      updateResult("It's a draw! Play again");
      return;
    }

    round = round + 1; // awards a point to the winner of the round
    document.getElementById("round").innerHTML = round; // only updates score when player or computer wins.

    scores[result[0]] = scores[result[0]] + 1; //dynamic object
    console.log(scores); //accessing the score from the round

    updateResult(`${result[0]} wins!, ${result[1]} beats ${result[2]}`);
  }

  // function that updates the result on the game board
  function updateResult(resultString) {
    // document.getElementById('result').innerHTML = resultString // adds the game outcome to the game board screen. on the results section.
    // document.getElementById('result').style.color ="red"; // update this section - colours for outcomes red-loose, green-win, black-draw
    // document.getElementById("player-choice").innerHTML = playerSelection // adds the players selection (r/p/s) to the game board
    // document.getElementById("computer-choice").innerHTML = computerSelection // adds the computer selection (r/p/s) to the game board
    // document.getElementById("computer-score").innerHTML = scores.computer  // adds points to computer score counter. Using objects
    // document.getElementById("player-score").innerHTML = scores.player  // adds points to player score counter. using objects
    Object.keys(scores).forEach((key) => {
      document.getElementById(`${key}-score`).innerHTML = scores[key]; // doing the same as lines 144/146 removing duplication
    });
  }

  //click buttons event listener for when player selects a button for rock paper scissors

  rock.addEventListener("click", () => {
    playRound("rock");
  });
  paper.addEventListener("click", () => {
    playRound("paper");
  });
  scissors.addEventListener("click", () => {
    playRound("scissors");
  });
  //;
}
localGame();

// const startingPlayerSelection = game() // game function is player choice from buttons pressed
//  const startingComputerSelection = computerPlay()
//  console.log(playRound(startingPlayerSelection, startingComputerSelection)) // play 1 round & shows result on console
