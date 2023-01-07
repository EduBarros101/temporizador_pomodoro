import { Controls } from './controls.js'

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

console.log('Início do programa.')

playBtn.addEventListener('click', function () {
  Controls.handlePlayClick
})
pauseBtn.addEventListener('click', Controls.handlePauseClick)
stopBtn.addEventListener('click', Controls.handleStopClick)

soundOnBtn.addEventListener('click', Controls.handleSoundOnClick)
soundOffBtn.addEventListener('click', Controls.handleSoundOffClick)

setBtn.addEventListener('click', Controls.handleSetClick)
