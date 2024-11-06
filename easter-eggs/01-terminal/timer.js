document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 21);

    const timerElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    };

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) {
            timerElements.days.textContent = '00';
            timerElements.hours.textContent = '00';
            timerElements.minutes.textContent = '00';
            timerElements.seconds.textContent = '00';
            clearInterval(countdownInterval);
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timerElements.days.textContent = String(days).padStart(2, '0');
            timerElements.hours.textContent = String(hours).padStart(2, '0');
            timerElements.minutes.textContent = String(minutes).padStart(
                2,
                '0'
            );
            timerElements.seconds.textContent = String(seconds).padStart(
                2,
                '0'
            );
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
