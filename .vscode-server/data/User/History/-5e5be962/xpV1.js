// Get the basic salary input from the user
var basicSalary = prompt("Enter your basic salary:");

// Get the benefits input from the user
var benefits = prompt("Enter your benefits:");

// Calculate the gross salary
var grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

// Calculate the PAYE tax
var payeTax;
if (grossSalary <= 12298) {
  payeTax = 0.1 * grossSalary;
} else if (grossSalary <= 23885) {
  payeTax = 0.15 * grossSalary;
} else if (grossSalary <= 35472) {
  payeTax = 0.2 * grossSalary;
} else if (grossSalary <= 47059) {
  payeTax = 0.25 * grossSalary;
} else {
  payeTax = 0.3 * grossSalary;
}

// Calculate the NHIF deductions
var nhifDeductions;
if (grossSalary <= 5999) {
  nhifDeductions = 150;
} else if (grossSalary <= 7999) {
  nhifDeductions = 300;
} else if (grossSalary <= 11999) {
  nhifDeductions = 400;
} else if (grossSalary <= 14999) {
  nhifDeductions = 500;
} else if (grossSalary <= 19999) {
  nhifDeductions = 600;
} else if (grossSalary <= 24999) {
  nhifDeductions = 750;
} else if (grossSalary <= 29999) {
  nhifDeductions = 850;
} else if (grossSalary <= 34999) {
  nhifDeductions = 950;
} else if (grossSalary <= 39999) {
  nhifDeductions = 1050;
} else if (grossSalary <= 44999) {
  nhifDeductions = 1150;
} else if (grossSalary <= 49999) {
  nhifDeductions = 1250;
} else if (grossSalary <= 59999) {
  nhifDeductions = 1350;
} else if (grossSalary <= 69999) {
  nhifDeductions = 1450;
} else if (grossSalary <= 79999) {
  nhifDeductions = 1550;
} else if (grossSalary <= 89999) {
  nhifDeductions = 1650;
} else if (grossSalary <= 99999) {
  nhifDeductions = 1750;
} else {
  nhifDeductions = 1850;
}

// Calculate the NSSF deducons
var nssfDeductions = 0.06 * grossSalary;

// Calculate the net salary
var netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions;

// Display the results
console.log("Basic Salary: " + basicSalary);
console.log("Benefits: " + benefits);
console.log("Gross Salary: " + grossSalary);
console.log("PAYE Tax: " + payeTax);
console.log("NHIF Deductions: " + nhifDeductions);
console.log("NSSF Deductions: " + nssfDeductions);
console.log("Net Salary: " + netSalary);
``