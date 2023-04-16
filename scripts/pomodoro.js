const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const timeLeftDisplay = document.querySelector('.time-left');

let timeLeft = 1500; // 25 minutes * 60 seconds
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    displayTimeLeft();
    if (timeLeft === 0) {
      clearInterval(timerId);
      alert('Time is up!');
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  timeLeft = 1500;
  displayTimeLeft();
}

function displayTimeLeft() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timeLeftDisplay.textContent = `${minutes}:${seconds}`;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

displayTimeLeft();
