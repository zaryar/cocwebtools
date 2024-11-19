document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate');
    const startTimerBtn = document.getElementById('startTimer');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const resultDiv = document.getElementById('result');
    const timersContainer = document.getElementById('active-timers');
    const timerSound = new Audio('beep.mp3'); // Create audio object

    let boostedHours = 0;
    let boostedMinutes = 0;

    calculateBtn.addEventListener('click', () => {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;

        const totalMinutes = (hours * 60 + minutes) / 10;
        
        boostedHours = Math.floor(totalMinutes / 60);
        boostedMinutes = Math.round(totalMinutes % 60);

        resultDiv.textContent = `Boosted time: ${boostedHours} hours and ${boostedMinutes} minutes`;
        startTimerBtn.style.display = 'block';
    });

    startTimerBtn.addEventListener('click', () => {
        createTimer(boostedHours, boostedMinutes);
        startTimerBtn.style.display = 'none';
        hoursInput.value = '0';
        minutesInput.value = '0';
        resultDiv.textContent = '';
    });

    function createTimer(hours, minutes) {
        const timerCard = document.createElement('div');
        timerCard.className = 'timer-card';
        
        let totalSeconds = hours * 3600 + minutes * 60;
        let timerId;

        function updateDisplay() {
            if (totalSeconds <= 0) {
                clearInterval(timerId);
                timerCard.remove();
                timerSound.play().catch(error => console.log('Error playing sound:', error));
                return;
            }

            const hrs = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;
            
            timerCard.innerHTML = `
                <span>${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}</span>
                <button onclick="this.parentElement.remove(); clearInterval(${timerId})">Delete</button>
            `;
            
            totalSeconds--;
        }

        updateDisplay();
        timerId = setInterval(updateDisplay, 1000);
        timersContainer.appendChild(timerCard);
    }
});