const choices = ["rock", "paper", "scissors"];

const getRandomPick = () => choices[Math.floor(Math.random() * choices.length)];
const getPlayerPick = () => {
  while (true) {
    let playerPick = prompt("rock, paper, scissors: ");

    if (playerPick === null) {
      return null;
    } else if (playerPick.toLowerCase() === "rock" || playerPick.toLowerCase() === "paper" || playerPick.toLowerCase() === "scissors") {
      return playerPick;
    } else {
      continue;
    }
  }
}

const round = (roundAmount) => {
  let playerWins = 0;
  let computerWins = 0;

  for (let counter = 1; counter <= roundAmount; counter++) {
    console.log(`Round ${counter}`);
    const playerPick = getPlayerPick();
    const computerPick = getRandomPick();
    if (playerPick === null) {
      console.log("You quit");
      break;
    }

    const result = playRound(playerPick, computerPick);
    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }
  }

  console.log();
  console.log((playerWins) > 0 && (playerWins > computerWins) ? "You are the winner!" : "You are the loser!");
  console.log(`Your score: ${playerWins}`);
  console.log(`Computer score: ${computerWins}`);
};

const playRound = (playerPick, computerPick) => {
  let result;
  const playersChoices = `\nYou: ${playerPick}\nComputer: ${computerPick}`;
  const winMessage = `You win!${playersChoices}`;
  const loseMessage = `You lose!${playersChoices}`;
  const tieMessage = `It's a tie!${playersChoices}`;
  
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
  } else if (playerPick === "scissors") {
    if (computerPick === "scissors") {
      result = tieMessage;
    } else if (computerPick === "paper") {
      result = winMessage;
    } else {
      result = loseMessage
    }
  }
  console.log(result);
  return result;
}

// TODO Restrict non-numbers [NaN] from being submitted.
round(Number(prompt("Number of rounds?", 1)));