const cardPlayerRock = document.querySelector('#player-rock')
cardPlayerRock.addEventListener('mouseenter', (e) => {
  const imgPlayerRock = document.querySelector('[data-img=player-rock]')
  // console.log(imgPlayerRock)
  imgPlayerRock.setAttribute('src', 'images/rock-neon.png')
})
cardPlayerRock.addEventListener('mouseleave', (e) => {
  const imgPlayerRock = document.querySelector('[data-img=player-rock]')
  // console.log(imgPlayerRock)
  imgPlayerRock.setAttribute('src', 'images/rock-white.png')
})

const cardPlayerPaper = document.querySelector('#player-paper')
cardPlayerPaper.addEventListener('mouseenter', (e) => {
  const imgPlayerPaper = document.querySelector('[data-img=player-paper]')
  // console.log(imgPlayerRock)
  imgPlayerPaper.setAttribute('src', 'images/paper-neon.png')
})
cardPlayerPaper.addEventListener('mouseleave', (e) => {
  const imgPlayerPaper = document.querySelector('[data-img=player-paper]')
  // console.log(imgPlayerRock)
  imgPlayerPaper.setAttribute('src', 'images/paper-white.png')
})

const cardPlayerScissors = document.querySelector('#player-scissors')
cardPlayerScissors.addEventListener('mouseenter', (e) => {
  const imgPlayerScissors = document.querySelector('[data-img=player-scissors]')
  // console.log(imgPlayerRock)
  imgPlayerScissors.setAttribute('src', 'images/scissors-neon.png')
})
cardPlayerScissors.addEventListener('mouseleave', (e) => {
  const imgPlayerScissors = document.querySelector('[data-img=player-scissors]')
  // console.log(imgPlayerRock)
  imgPlayerScissors.setAttribute('src', 'images/scissors-white.png')
})
