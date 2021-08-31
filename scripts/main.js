// User Choice
let playerSelection
let toggleModal = false

const playerHandCards = document.querySelectorAll('#player-choice-row .card')
playerHandCards.forEach((playerHandCard) => {
  playerHandCard.addEventListener('click', onClickPlayerHandCard)
})

function onClickPlayerHandCard(e) {
  const playerChoice =
    e.target.id ||
    e.target.getAttribute('data-img') ||
    e.target.getAttribute('data-title')

  playerSelection = playerChoice.split('-')[1]

  // console.log(playerChoice)
  onSelectedCard()

  if (playerSelection) {
    game()
  }
}

function onSelectedCard() {
  if (!playerSelection) {
    return
  }

  // REMOVE NEON IMAGE COLOR SELECTED
  playerHandCards.forEach((card) => {
    card.classList.remove('selected')
  })

  const cardTitles = document.querySelectorAll('#player-choice-row .card h3')
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove('selected-title')
  })

  const cardImgs = document.querySelectorAll('#player-choice-row .card img')
  cardImgs.forEach((cardImg) => {
    const cardName = cardImg.getAttribute('data-img').split('-')[1]
    cardImg.setAttribute('src', `images/${cardName}-white.png`)
  })

  // ADD NEON IMAGE COLOR SELECTED
  let playerCardDiv = document.querySelector(`div#player-${playerSelection}`)
  playerCardDiv.classList.add('selected')

  let imgCard = document.querySelector(`div#player-${playerSelection} img`)
  imgCard.setAttribute('src', `images/${playerSelection}-neon.png`)

  let h3 = document.querySelector(`div#player-${playerSelection} h3`)
  h3.classList.add('selected-title')

  // GRAB the h2
  let h2 = document.querySelector('#player-selection-row h2')
  let span = document.createElement('span')
  span.style.color = 'rgb(204, 255, 2)'
  span.style.fontSize = '18px'
  span.textContent = ` ${playerSelection.toUpperCase()}`
  h2.innerHTML = `Your choice: `
  h2.appendChild(span)

  return
}

/**
 * Return randomly 'Rock', 'Paper', 'Scissors'
 */
function computerPlay() {
  const computerChoices = [ROCK, PAPER, SCISSORS]
  const indexChoice = getRandomInt(3)
  const computerSelection = computerChoices[indexChoice].toLowerCase()

  let computerCardChoices = document.querySelectorAll('#cpu-choice-row .card')
  // REMOVE NEON IMAGE COLOR SELECTED
  computerCardChoices.forEach((card) => {
    card.classList.remove('selected')
  })

  const cardTitles = document.querySelectorAll('#cpu-choice-row .card h3')
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove('selected-title')
  })

  const cardImgs = document.querySelectorAll('#cpu-choice-row .card img')
  cardImgs.forEach((cardImg) => {
    const cardName = cardImg.getAttribute('data-img').split('-')[1]
    cardImg.setAttribute('src', `images/${cardName}-white.png`)
  })

  // ADD NEON IMAGE COLOR SELECTED
  let cpuCardDiv = document.querySelector(`div#cpu-${computerSelection}`)
  cpuCardDiv.classList.add('selected')

  let imgCard = document.querySelector(`div#cpu-${computerSelection} img`)
  imgCard.setAttribute('src', `images/${computerSelection}-neon.png`)

  let h3 = document.querySelector(`div#cpu-${computerSelection} h3`)
  h3.classList.add('selected-title')

  // GRAB the h2
  let h2 = document.querySelector('#cpu-selection-row h2')
  let span = document.createElement('span')
  span.style.color = 'rgb(204, 255, 2)'
  span.style.fontSize = '18px'
  span.textContent = ` ${computerSelection.toUpperCase()}`
  h2.innerHTML = `CPU choice: `
  h2.appendChild(span)

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

const modalContainer = document.querySelector('div#modal-container')
modalContainer.addEventListener('click', removeModal)

/**
 * PLAY 5 GAME of rock  paper scissors
 */
function game() {
  // Computer Choice
  const computerSelection = computerPlay()
  const result = playRound(playerSelection, computerSelection)
  setTimeout(() => resetGame(result), 500)
  console.log(result)
}

function resetGame(result) {
  console.log('Reset Game')
  modalContainer.style.display = 'block'
  const modalContent = document.querySelector('.alert-card-content')
  modalContent.textContent = result
}

function removeModal(e) {
  const cards = document.querySelectorAll('.row .card')
  cards.forEach((card) => {
    card.classList.remove('selected')
  })

  const cardTitles = document.querySelectorAll('.card h3')
  cardTitles.forEach((cardTitle) => {
    cardTitle.classList.remove('selected-title')
  })

  const cardImgs = document.querySelectorAll('.card img')
  cardImgs.forEach((cardImg) => {
    const cardName = cardImg.getAttribute('data-img').split('-')[1]
    cardImg.setAttribute('src', `images/${cardName}-white.png`)
  })

  h2 = document.querySelector('#player-selection-row h2')
  h2.textContent = `PLEASE CHOOSE:`
  h2 = document.querySelector('#cpu-selection-row h2')
  h2.textContent = `COMPUTER CHOICE:`
  modalContainer.style.display = 'none'
}
