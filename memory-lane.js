let currentMonth = 0;  // Track the current month being displayed
const months = document.querySelectorAll('.memory-month');  // Get all the month divs

// Function to show the next month's message
function showNextMonth() {
    if (currentMonth < months.length) {
        // Show the next month and increase the counter
        months[currentMonth].classList.add('show');
        currentMonth++;
    } else {
        // Once all months are shown, go to the end page
        window.location.href = 'end.html';
    }
}

// Initially show the first month after a delay
window.onload = function() {
    showNextMonth();  // Show the first message immediately after page load
};
