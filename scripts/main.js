let playerSelection = prompt('Choose between : Rock, Paper or Scissors')
// User Choice
while (!checkUserInput(playerSelection)) {
  playerSelection = prompt('Choose between : Rock, Paper or Scissors')
}

// Computer Choice
const computerSelection = computerPlay()

/**
 * Return randomly 'Rock', 'Paper', 'Scissors'
 */
function computerPlay() {
  const computerChoices = [ROCK, PAPER, SCISSORS]
  const indexChoice = getRandomInt(3)
  return capitalize(computerChoices[indexChoice])
}

/**
 * Return the winner of rocker paper scissors
 */
function playRound(playerSelection, computerSelection) {
  const cleanPlayerSelection = playerSelection.trim().toLowerCase()
  const cleanCPUSelection = computerSelection.trim().toLowerCase()
  if (cleanPlayerSelection === ROCK && cleanCPUSelection === PAPER) {
    return `You Lose! ${cleanCPUSelection} beats ${cleanPlayerSelection}`
  } else if (cleanPlayerSelection === ROCK && cleanCPUSelection === SCISSORS) {
    return `You Win! ${cleanPlayerSelection} beats ${cleanCPUSelection}`
  } else if (cleanPlayerSelection === PAPER && cleanCPUSelection === ROCK) {
    return `You Win! ${cleanPlayerSelection} beats ${cleanCPUSelection}`
  } else if (cleanPlayerSelection === PAPER && cleanCPUSelection === SCISSORS) {
    return `You lose! ${cleanCPUSelection} beats ${cleanPlayerSelection}`
  } else if (cleanPlayerSelection === SCISSORS && cleanCPUSelection === ROCK) {
    return `You lose! ${cleanCPUSelection} beats ${cleanPlayerSelection}`
  } else if (cleanPlayerSelection === SCISSORS && cleanCPUSelection === PAPER) {
    return `You Win! ${cleanPlayerSelection} beats ${cleanCPUSelection}`
  } else {
    return `It\' a Tie!`
  }
}

function displayWinnerMsg(userWin, userChoice, CPUChoice) {
  if (!userWin) {
    return `You lose! ${CPUChoice} beats ${userChoice}`
  }
  return `You Win! ${userChoice} beats ${CPUChoice}`
}

/**
 * PLAY 5 GAME of rock  paper scissors
 */
function game() {
  return playRound(playerSelection, computerSelection)
}

game()
