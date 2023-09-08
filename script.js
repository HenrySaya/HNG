function toggleDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
}

function toggleLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
}

function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.innerText = `Current Day: ${currentDay}`;
}

// Call this function to update the current day when the page loads 

updateCurrentDay();

// Call this function to update the current day when the page loads
function updateCurrentUTCTime() {
    const currentUTCTimeInMilliseconds = new Date().getTime();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.innerText = `Current UTC Time (milliseconds): ${currentUTCTimeInMilliseconds}`;
}

// Call this function to update the current UTC time when the page loads
updateCurrentUTCTime();

