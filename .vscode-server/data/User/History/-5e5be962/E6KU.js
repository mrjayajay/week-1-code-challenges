// Get the basic salary input from the user
var basicSalary = prompt("Enter your basic salary:");

// Get the benefits input from the user
var benefits = prompt("Enter your benefits:");

// Calculate the gross salary
var grossSalary = parseFloat(basicSalary) + parseFloat(benefits);

// Calculate the PAYE tax
var payeTax;
if (grossSalary <= 24000) {
  payeTax = 0;
} else if (grossSalary <= 32333) {
  payeTax = 0.1 * (grossSalary - 24000);
} else if (grossSalary <= 45666) {
  payeTax = 0.25 * (grossSalary - 32333) + 2400;
} else if (grossSalary <= 55000) {
  payeTax = 0.3 * (grossSalary - 45666) + 5833.3;
} else {
  payeTax = 0.35 * (grossSalary - 55000) + 10300;
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

// Calculate the NSSF deductions
var nssfDeductions = 0.06 * grossSalary;

// Calculate the net salary
var netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions;

// Display the results
alert("Gross Salary: " + grossSalary.toFixed(2));
alert("Payee: " + payeTax.toFixed(2));
alert("NHIF Deductions: " + nhifDeductions.toFixed(2));
alert