/**
 * return a random a number integer from 0 to max
 * Max not included
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

/**
 * Return string with first capitalize
 */
function capitalize(str) {
  return `${str[0].toLocaleUpperCase()}` + `${str.slice(1)}`
}

/**
 * Check user input
 */
function checkUserInput(userInput) {
  if (!userInput.trim()) {
    return false
  }
  const validChoices = [ROCK, PAPER, SCISSORS]
  if (!validChoices.includes(userInput.trim().toLowerCase())) {
    return false
  }
  return true
}

/**
 * Display the message who win the game
 * @param userWin boolean if user win or not
 * @param userChoice string user selection rock paper scissors
 * @param CPUChoice string CPU selection rocker paper scissors
 */
function displayWinnerMsg(userWin, userChoice, CPUChoice) {
  if (!userWin) {
    return `You lose! ${CPUChoice} beats ${userChoice}`
  }
  return `You Win! ${userChoice} beats ${CPUChoice}`
}
