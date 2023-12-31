const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const setBtn = document.querySelector('.set')

const soundOnBtn = document.querySelector('.sound-on')
const soundOffBtn = document.querySelector('.sound-off')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let timerSetOut
let minutes
let seconds

playBtn.addEventListener('click', handlePlayClick)
pauseBtn.addEventListener('click', handlePauseClick)
stopBtn.addEventListener('click', handleStopClick)

soundOnBtn.addEventListener('click', handleSoundOnClick)
soundOffBtn.addEventListener('click', handleSoundOffClick)

setBtn.addEventListener('click', handleSetClick)

function handlePlayClick() {
  playBtn.classList.add('hide')
  pauseBtn.classList.remove('hide')
  setBtn.classList.add('hide')
  stopBtn.classList.remove('hide')

  countDown()
}

function handlePauseClick() {
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
  setBtn.classList.add('hide')
  stopBtn.classList.remove('hide')

  clearTimeout(timerSetOut)
}

function handleStopClick() {
  playBtn.classList.remove('hide')
  pauseBtn.classList.add('hide')
  setBtn.classList.remove('hide')
  stopBtn.classList.add('hide')

  minutesDisplay.textContent = String(0).padStart(2, 0)
  secondsDisplay.textContent = String(0).padStart(2, 0)

  console.log('Botão de Stop clicado.')
}

function handleSoundOnClick() {
  soundOnBtn.classList.add('hide')
  soundOffBtn.classList.remove('hide')
}

function handleSoundOffClick() {
  soundOffBtn.classList.add('hide')
  soundOnBtn.classList.remove('hide')
}

function handleSetClick() {
  minutes = prompt('Quantos minutos?') || 0
  seconds = prompt('Quantos segundos?') || 0

  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')

  handlePlayClick()
}

function countDown() {
  timerSetOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds == 0) {
      handleStopClick()
      console.log('Contou até o final.')
      return
    }

    if (seconds <= 0) {
      seconds = 60

      minutesDisplay.textContent = String(--minutes).padStart(2, '0')
    }

    secondsDisplay.textContent = String(--seconds).padStart(2, '0')

    countDown()
  }, 1000)
}
