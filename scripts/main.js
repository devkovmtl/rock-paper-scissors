// User Choice
let playerSelection

function onClickPlayerHandCard(e) {
  const playerChoice =
    e.target.id ||
    e.target.getAttribute('data-img') ||
    e.target.getAttribute('data-title')
  playerSelection = playerChoice.split('-')[1]
  console.log(playerChoice)
  game()
}

const playerHandCards = document.querySelectorAll('#player-choice-row .card')
playerHandCards.forEach((playerHandCard) =>
  playerHandCard.addEventListener('click', onClickPlayerHandCard)
)

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
    return displayWinnerMsg(false, cleanPlayerSelection, cleanCPUSelection)
  } else if (cleanPlayerSelection === ROCK && cleanCPUSelection === SCISSORS) {
    return displayWinnerMsg(true, cleanPlayerSelection, cleanCPUSelection)
  } else if (cleanPlayerSelection === PAPER && cleanCPUSelection === ROCK) {
    return displayWinnerMsg(true, cleanPlayerSelection, cleanCPUSelection)
  } else if (cleanPlayerSelection === PAPER && cleanCPUSelection === SCISSORS) {
    return displayWinnerMsg(false, cleanPlayerSelection, cleanCPUSelection)
  } else if (cleanPlayerSelection === SCISSORS && cleanCPUSelection === ROCK) {
    return displayWinnerMsg(false, cleanPlayerSelection, cleanCPUSelection)
  } else if (cleanPlayerSelection === SCISSORS && cleanCPUSelection === PAPER) {
    return displayWinnerMsg(true, cleanPlayerSelection, cleanCPUSelection)
  } else {
    return `It\' a Tie!`
  }
}

/**
 * PLAY 5 GAME of rock  paper scissors
 */
function game() {
  const result = playRound(playerSelection, computerSelection)
  console.log(result)
}
