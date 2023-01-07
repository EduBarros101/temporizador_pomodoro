export function countDown() {
  timerSetOut = setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (minutes <= 0 && seconds == 0) {
      console.log('Contou até o final.')
      handleStopClick()
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
