document.addEventListener('DOMContentLoaded', function() {
    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
        document.getElementById('min').textContent = String(minutes).padStart(2, '0');
        document.getElementById('sec').textContent = String(seconds).padStart(2, '0');
    }

    function startTimer() {
        timer = setInterval(function() {
            if (minutes === 0 && seconds === 0) {
                clearInterval(timer);
                isRunning = false;
                document.getElementById('rest').textContent = "Time rest is complete!";
                return;
            }
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
        isRunning = true;
    }

    function pauseTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
        minutes = 25;
        seconds = 0;
        updateDisplay();
        document.getElementById('rest').textContent = "Click now for start timer";
    }

    function getTimeDifference() {
        const now = new Date();
        const timeDifference = new Date(now.getTime() - minutes * 60000 - seconds * 1000);

        const options = { timeZone: 'Africa/Tunis', hour: '2-digit', minute: '2-digit' };
        const timeString = timeDifference.toLocaleTimeString('en-US', options);

        return timeString;
    }

    document.getElementById('start').addEventListener('click', function() {
        if (!isRunning) {
            startTimer();
            const timeDifference = getTimeDifference();
            document.getElementById('rest').textContent = `Study time Now  `;
        }
    });

    document.getElementById('pause').addEventListener('click', function() {
        if (isRunning) {
            pauseTimer();
        }
    });

    document.getElementById('stop').addEventListener('click', function() {
        stopTimer();
    });
});
