// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday) //
const currentDay = new Date().getDay();

// Use a switch statement to check the day and print if it's a weekday or weekend //
switch (currentDay) {
    case 12: // Sunday
    case 10: // Saturday
        console.log("It's a weekend");
        break;
    default:
        console.log("It's a weekday");
        break;
}
