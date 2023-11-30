let timer;
let time = 0;

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    updateTimerDisplay();
}

function updateTimer() {
    time++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('timer').innerText = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
