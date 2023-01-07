import { countDown } from './timer.js'

export function Controls() {
  function handlePlayClick() {
    console.log('botão de Controle pressionado.')

    playBtn.classList.add('hide')
    pauseBtn.classList.remove('hide')
    setBtn.classList.add('hide')
    stopBtn.classList.remove('hide')

    countDown()
  }

  function handlePauseClick() {
    console.log('botão de Controle pressionado.')

    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
    setBtn.classList.add('hide')
    stopBtn.classList.remove('hide')

    clearTimeout(timerSetOut)
  }

  function handleStopClick() {
    console.log('botão de Controle pressionado.')

    playBtn.classList.remove('hide')
    pauseBtn.classList.add('hide')
    setBtn.classList.remove('hide')
    stopBtn.classList.add('hide')

    minutesDisplay.textContent = String(0).padStart(2, 0)
    secondsDisplay.textContent = String(0).padStart(2, 0)

    clearTimeout(timerSetOut)

    console.log('Botão de Stop clicado.')
  }

  function handleSetClick() {
    console.log('botão de Controle pressionado.')

    minutes = prompt('Quantos minutos?') || 0
    seconds = prompt('Quantos segundos?') || 0

    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')

    handlePlayClick()
  }

  function handleSoundOnClick() {
    console.log('botão de Controle pressionado.')

    soundOnBtn.classList.add('hide')
    soundOffBtn.classList.remove('hide')
  }

  function handleSoundOffClick() {
    console.log('botão de Controle pressionado.')

    soundOffBtn.classList.add('hide')
    soundOnBtn.classList.remove('hide')
  }

  return {
    handlePlayClick,
    handlePauseClick,
    handleStopClick,
    handleSetClick,
    handleSoundOnClick,
    handleSoundOffClick,
  }
}
