// Prompt the user to enter the student's mark
const mark = parseInt(prompt("Please enter the student's mark (between 0 and 100):"));

// Check if the input is a number and is within the specified range
if (isNaN(mark) || mark < 0 || mark > 100) {
  alert("Invalid input. Please enter a number between 0 and 100.");
} else {
  // Calculate the grade based on the mark
  let grade;
  if (mark >= 90) {
    grade = "A";
  } else if (mark >= 80) {
    grade = "B";
  } else if (mark >= 70) {
    grade = "C";
  } else if (mark >= 60) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Display the grade
  alert("The student's grade is: " + grade);
}