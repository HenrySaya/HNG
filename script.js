function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    currentDayElement.textContent = `${currentDay}`;
}

function updateCurrentUTCTime() {
    const currentUTCTimeInMilliseconds = new Date().getTime();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUtcTime"]');
    currentUTCTimeElement.textContent = currentUTCTimeInMilliseconds.toString();
}

// Call these functions to update the current day and UTC time when the page loads
updateCurrentDay();
updateCurrentUTCTime();

