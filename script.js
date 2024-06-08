let timer;
let isRunning = false;
let time = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            document.getElementById('timer').querySelector('h1').textContent = new Date(time * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    time = 0;
    document.getElementById('timer').querySelector('h1').textContent = '00:00:00';
}
