function getComputerChoice() {
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
    let result = getComputerChoice();
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
