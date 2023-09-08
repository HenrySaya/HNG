function currentDayOfTheWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = `${currentDay}`;
}

function updateCurrentUTCTime() {
    const currentUTCTimeInMilliseconds = new Date().getTime();
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = currentUTCTimeInMilliseconds.toString();
}

// Call these functions to update the current day and UTC time when the page loads
currentDayOfTheWeek();
updateCurrentUTCTime();

