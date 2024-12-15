// Get the current hour //
const currentHour = new Date().getHours();

// Prompt the user for their current hour //
let currenthour = prompt("Please enter your current hour:");

// Check the time and print the appropriate greeting //
if (currentHour >= 6 && currentHour < 12) {
    console.log("Good morning");
} else if (currentHour >= 12 && currentHour < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}
