// create a function that evaluates player and computer choices
// return a string that declares the winner
const choices = ["rock", "paper", "scissors"];
const playerPick = prompt("Rock, Paper, Scissors: ").toLowerCase();

const getRandomPick = () => choices[Math.floor(Math.random() * choices.length)];
const computerPick = getRandomPick();

const playRound = (playerPick, computerPick) => {
  let result;
  const playersChoices = `\nYou: ${playerPick}\nComputer: ${computerPick}`;
  const winMessage = `You Win!${playersChoices}`;
  const loseMessage = `You Lose!${playersChoices}`;
  const tieMessage = `Tie!${playersChoices}`;
  
  // Evaluate order is: tie, win lose
  if (playerPick === "rock") {
    if (computerPick === "rock") {
      result = tieMessage;
    } else if (computerPick === "scissors") {
      result = winMessage;
    } else {
      result = loseMessage;
    }
  } else if (playerPick === "paper") {
    if (computerPick === "paper") {
      result = tieMessage;
    } else if (computerPick === "rock") {
      result = winMessage;
    } else {
      result = loseMessage;
    }
  } else {
    if (computerPick === "scissors") {
      result = tieMessage;
    } else if (computerPick === "paper") {
      result = winMessage;
    } else {
      result = loseMessage
    }
  }

  return result;
}

console.log(playRound(playerPick, computerPick));