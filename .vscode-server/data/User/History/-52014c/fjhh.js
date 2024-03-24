g// Prompt the user to enter the speed of a car
var speed = prompt("Please enter the speed of a car (km/s):");

// Set the speed limit to 70 km/s
var speedLimit = 70;

// Initialize the number of demerit points to 0
var demeritPoints = 0;

// If the speed is greater than the speed limit
if (speed > speedLimit) {
  // Calculate the difference between the speed and the speed limit
  var difference = speed - speedLimit;

  // Calculate the number of demerit points
  demeritPoints = Math.ceil(difference / 5);

  // If the driver has more than 12 demerit points
  if (demeritPoints > 12) {
    // Print the license suspension message
    alert("License suspended");
  } else {
    // Print the number of demerit points
    alert("Points: " + demeritPoints);
  }
} else {
  // If the speed is less than or equal to the speed limit
  // Print the Ok message
  alert("Ok");
}