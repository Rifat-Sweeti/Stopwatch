let timer;
let isRunning = false;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    displayTime(0);
    startStopBtn.textContent = 'Start';
    isRunning = false;
});

function updateTime() {
    elapsedTime++;
    displayTime(elapsedTime);
}

function displayTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${secs}`;
}
