function getRandomChoice() {
  let randomNumber = getRandomNumber();
  let computerChoice = "";

  switch (randomNumber) {
    case 1:
    case 2:
    case 3:
      computerChoice = "rock";
      break;
    case 4:
    case 5:
    case 6:
      computerChoice = "paper";
      break;
    case 7:
    case 8:
    case 9:
      computerChoice = "scissors";
      break;
    default:
      console.warn("Invalid choice.");
  }

  return computerChoice;
}

// Generates a number from 0-9
function getRandomNumber() {
  let random = Math.random() * 10; // Moves the decimal place once to the left.
  random = Math.floor(random);

  // We don't want 0 so that there is "balanced" randomness.
  if (random === 0) {
    random = getRandomNumber();
  }

  return random;
}

function checkComputerChoice(rounds) {
  let rCounter = 0,
    pCounter = 0,
    sCounter = 0;

  for (let i = 0; i < rounds; i++) {
    let result = getRandomChoice();
    if (result === "rock") {
      rCounter++;
    } else if (result === "paper") {
      pCounter++;
    } else {
      sCounter++;
    }
  }

  console.log(`Rock: ${rCounter}\nPaper: ${pCounter}\nScissors: ${sCounter}`);
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else if (humanChoice === computerChoice) {
    return "tie";
  } else {
    return "lose";
  }
}

function initializeButtons() {
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((button) => {
    button.addEventListener("click", (clickEvent) => {
      const buttonThatWasPressed = clickEvent.target;
      playGame(buttonThatWasPressed);
    });
  });
}

function getScore(scoreElement) {
  return Number(scoreElement.textContent.at(-1));
}

function incrementScore(scoreElement) {
  let currentScore = getScore(scoreElement);
  const label = scoreElement.textContent.split(" ")[0];

  scoreElement.textContent = `${label} ${currentScore + 1}`;
}

function updateResult(winLoseOrTie) {
  let result = "";

  if (winLoseOrTie === "win") {
    result = "You Win!";
  } else if (winLoseOrTie === "lose") {
    result = "You Lose!";
  } else {
    result = "It's a tie!";
  }

  return result;
}

function displayChoices(playerChoice, computerChoice) {
  const choicesDisplay = document.querySelector(".display-choices");
  const player = choicesDisplay.firstElementChild;
  const computer = choicesDisplay.lastElementChild;

  player.textContent = playerChoice;
  computer.textContent = computerChoice;

  choicesDisplay.style.textTransform = "capitalize";
}

function playGame(buttonThatWasPressed) {
  const playerScoreSpanElement = document.querySelector(".player-score");
  const computerScoreSpanElement = document.querySelector(".computer-score");
  const resultDisplay = document.querySelector(".result");

  let playerSelection = buttonThatWasPressed.textContent.toLowerCase();
  let computerSelection = getRandomChoice();
  const result = playRound(playerSelection, computerSelection);
  let messageToBeDisplayed = "";

  displayChoices(playerSelection, computerSelection);

  switch (result) {
    case "win":
      incrementScore(playerScoreSpanElement);
      break;
    case "lose":
      incrementScore(computerScoreSpanElement);
      break;
  }

  messageToBeDisplayed = updateResult(result);
  resultDisplay.textContent = messageToBeDisplayed;
}

initializeButtons();
