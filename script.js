const stringChoices = ['rock', 'paper', 'scissors'];
const roundCounter = document.querySelector('#round-counter');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const finalWinner = document.querySelector('.final-winner p');
const getRandomPick = () =>
  stringChoices[Math.floor(Math.random() * stringChoices.length)];
const choices = document.querySelectorAll('.choices img');

function updateRoundCounter(round = -1) {
  roundCounter.innerText = `Round ${round}`;
}

function updateScores(wins) {
  playerScore.innerText = wins.player;
  computerScore.innerText = wins.computer;
}

function updateChoices(choice) {
  playerChoice.innerText = `You: ${choice.player}`;
  computerChoice.innerText = `Computer: ${choice.computer}`;
}

function checkRoundWinner(resultObject, winsObject) {
  if (resultObject.playerWin) {
    winsObject.player++;
  } else if (resultObject.computerWin) {
    winsObject.computer++;
  }
}

function evaluateResult(result) {
  let resultString;

  const resultMessage = {
    win: 'You win!',
    lose: 'You lose!',
    tie: 'Tie!',
  };
  if (result.playerWin) {
    resultString = resultMessage.win;
  } else if (result.computerWin) {
    resultString = resultMessage.lose;
  } else {
    resultString = resultMessage.tie;
  }

  return resultString;
}

function displayResult(result, lastRound = false, wins) {
  const resultPara = document.querySelector('.result p');

  if (lastRound) {
    finalWinner.innerText = `The winner is: ${
      wins.player > wins.computer ? 'You' : 'Computer'
    }`;
  }
  resultPara.innerText = evaluateResult(result);
  // TODO end game when last round
}

const round = (roundAmount) => {
  const wins = { player: 0, computer: 0 };
  const choice = { player: '', computer: '' };
  let round = 1;
  updateRoundCounter(round);

  choices.forEach((imageButton) =>
    imageButton.addEventListener('click', () => {
      choice.player = imageButton.id;
      choice.computer = getRandomPick();
      updateRoundCounter(round);
      updateChoices(choice);

      const result = playRound(choice);

      checkRoundWinner(result, wins);

      updateScores(wins);
      if (round >= roundAmount) {
        round = 1;

        displayResult(result, true, wins);

        wins.player = 0;
        wins.computer = 0;
      } else {
        displayResult(result);
        round++;
        finalWinner.innerText = '';
      }
    })
  );
};

const playRound = (choice) => {
  let result = { playerWin: false, computerWin: false, tie: false };

  // Evaluate order is: tie, win lose
  if (choice.player === choice.computer) {
    result.tie = true;
  } else if (choice.player === 'rock') {
    if (choice.computer === 'scissors') {
      result.playerWin = true;
    } else {
      result.computerWin = true;
    }
  } else if (choice.player === 'paper') {
    if (choice.computer === 'rock') {
      result.playerWin = true;
    } else {
      result.computerWin = true;
    }
  } else if (choice.player === 'scissors') {
    if (choice.computer === 'paper') {
      result.playerWin = true;
    } else {
      result.computerWin = true;
    }
  }

  return result;
};

// TODO Restrict non-numbers [NaN] from being submitted.
round(5);
