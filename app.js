
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."
const remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    document.write("Please refill the fuel in your car.");
} else {
    document.write("You have enough fuel to continue your journey.");
}


// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
const subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
const subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
const subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
const totalMarks = parseFloat(prompt("Enter total marks:"));


const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

const percentage = (totalObtainedMarks / totalMarks) * 100;

let grade, remarks;

if (percentage >= 90) {
    grade = "A+";
    remarks = "Excellent!";
} else if (percentage >= 80) {
    grade = "A";
    remarks = "Very good!";
} else if (percentage >= 70) {
    grade = "B";
    remarks = "Good.";
} else if (percentage >= 60) {
    grade = "C";
    remarks = "Satisfactory.";
} else {
    grade = "F";
    remarks = "Needs improvement.";
}


document.write(`<br>Percentage: ${percentage.toFixed(2)}%<br>`);
document.write(`Grade: ${grade}<br>`);
document.write(`Remarks: ${remarks}`);


// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).
const literalArr = [true, 42, "Hello", null, undefined];
const stringArr = ["apple", "banana", "cherry"];
const numberArr = [1, 2, 3, 4, 5];
const boolArr = [true, false, true];
const mixedArr = [3.14, "orange", true, null, 42];
const qualificationArr = ["Bachelor's", "Master's", "Ph.D."];

document.write("<br>literalArr: " + literalArr + "<br>");
document.write("stringArr: " + stringArr + "<br>");
document.write("numberArr: " + numberArr + "<br>");
document.write("boolArr: " + boolArr + "<br>");
document.write("mixedArr: " + mixedArr + "<br>");
document.write("qualificationArr: " + qualificationArr + "<br>");



// 5)Write a program to store phone manufacturers in an array.
const phoneManufacturers = ["Apple", "Samsung", "Google", "Huawei", "OnePlus", "Xiaomi"];

document.write("<br>Phone Manufacturers: " + phoneManufacturers);


// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.
const studentScores = [85, 92, 78, 95, 88, 70, 83];

studentScores.sort(function(a, b) {
    return a - b;
});

console.log("<br>Sorted Student Scores:", studentScores);

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

const wordsArray = ["This", "is", "my", "cat"];
const singleString = wordsArray.join(" ");
document.write("<br>Single String: " + singleString+"<br>");


// 8)Implement the FIFO (First In First Out) approach using arrays.
const fifoarrays = [];
fifoarrays.push("First");
fifoarrays.push("Second");
fifoarrays.push("Third");

const firstElement = fifoarrays.shift();
const secondElement = fifoarrays.shift();
const thirdElement = fifoarrays.shift();

document.write("<br>Dequeued Elements:<br>");
document.write("First Element: " + firstElement + "<br>");
document.write("Second Element: " + secondElement + "<br>");
document.write("Third Element: " + thirdElement + "<br>");

document.write("Updated Queue: " + JSON.stringify(fifoarrays) +"<br>");


// 9)// Implement the LIFO (Last In First Out) approach using arrays.
// Creating an empty LIFO stack
const lifoArray = [];

// Push elements onto the stack
lifoArray.push("First-Q9");
lifoArray.push("Second-Q9");
lifoArray.push("Third-Q9");

// Pop elements from the stack
const thirdElement9 = lifoArray.pop();
const secondElement9 = lifoArray.pop();
const firstElement9 = lifoArray.pop();


document.write("Popped Elements:<br>");
document.write("First Element: " + firstElement9 + "<br>");
document.write("Second Element: " + secondElement9 + "<br>");
document.write("Third Element: " + thirdElement9 + "<br>");

document.write("Updated Stack: " + JSON.stringify(lifoArray) +"</br>");


// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

const items = ["apple", "banana", "cherry", "grape", "orange"];

const searchItem = prompt("Enter an item to search:");


if (items.includes(searchItem.toLowerCase())) {
    document.write(`"${searchItem}" is found in the list.<br>`);
} else {
    document.write(`"${searchItem}" is not found in the list.<br>`);
}


// 11)Write a program to identify the largest number in the given array.

const numbers11 = [42, 15, 73, 28, 91, 62, 10, 54];


let largestNumber = numbers11[0];

for (let i = 1; i < numbers11.length; i++) {
    if (numbers11[i] > largestNumber) {
        largestNumber = numbers11[i];
    }
}

document.write("The largest number in the array is: " + largestNumber+ "<br>");


// 12)Write a program to identify the smallest number in the given array.

const numbers12 = [42, 15, 73, 28, 91, 62, 10, 54];

let smallestNumber = numbers12[0];

for (let i = 1; i < numbers12.length; i++) {
    if (numbers12[i] < smallestNumber) {
        smallestNumber = numbers12[i];
    }
}

document.write("The smallest number in the array is: " + smallestNumber+ "<br>");


// 13)Write a program to print multiples of 5 ranging from 1 to 100.
for (let i = 1; i <= 20; i++) {
    const multiple = i * 5;
    document.write(multiple + "<br>");
}


// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const sum = num1 + num2;

document.write("<br>The sum of " + num1 + " and " + num2 + " is " + sum +"<br>");


// 14)Repeat task1 for subtraction, multiplication, division & modulus.

const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;

// Displaying the results in the browser
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus + "<br>");


//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

const city = prompt("Enter the city name:").toLowerCase();

if (city === "karachi") {
    document.write("<br>Welcome to the city of lights.");
} else {
    document.write("<br>Welcome.");
}



// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

const gender = prompt("Enter your gender (Male/Female):").toLowerCase();

if (gender === "male") {
    document.write("<br>Good Morning Sir.");
} else if (gender === "female") {
    document.write("<br>Good Morning Ma'am.");
} else {
    document.write("<br>Unknown gender.");
}


//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."

const color = prompt("Enter the color of the traffic signal:").toLowerCase();

if (color === "red") {
    document.write("<br>Must Stop.");
} else if (color === "yellow") {
    document.write("<br>Ready to move.");
} else if (color === "green") {
    document.write("<br>Move now.");
} else {
    document.write("<br>Invalid color input.");
}
