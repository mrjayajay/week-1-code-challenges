// Prompt the user for student marks
let marks = prompt("Please enter the student's marks (0-100):");

// Convert the input to a number and check if it's within the valid range
marks = parseInt(marks);
if (marks < 0 || marks > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
} else {
    // Determine the grade based on the marks
    let grade;
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    alert("The student's grade is: " + grade);
}
