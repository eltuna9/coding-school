// Exercises to practices loops! aka rabbit holes 🤣

// Exercise 1)
// Get the sum of all the elements of an array of numbers

let exampleArray1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

function sumOfAllElements(array) {
  let total = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    total = total + element;
  }
  return total;
}

console.log(
  "Exercise 1 result (sumOfAllElements) is:",
  sumOfAllElements(exampleArray1),
  "it should be",
  276
);

// Exercise 2)
// Using a for loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];

function reverseOrder(array) {
  let newArray = [];
  for (let index = array.length - 1; index > 0; index--) {
    const element = array[index];
    newArray.push(element);
  }
  return newArray;
}

console.log(
  "Exercise 2 result (reverseOrder) is:",
  reverseOrder(arr),
  "it should be",
  [true, 3.5, "be", false, "cannot", true, 9, "what", 43]
);
// Exercise 3)
// Giving an array of numbers, return a new array which contains only the even numbers
let numbers = [78, 5, 22, 5, 7, 2, 45, 75, 16, 21, 2];
// you may want to see this to learn how to check even numbers -> https://www.programiz.com/javascript/examples/even-odd#:~:text=In%20the%20above%20program%2C%20number,Hence%2C%20the%20number%20is%20odd.
function getEvenNumbers(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 == 0) {
      newArray.push(element);
    }
  }
  return newArray;
}

console.log(
  "Exercise 3 result (getEvenNumbers) is:",
  getEvenNumbers(numbers),
  "it shold be",
  [78, 22, 2, 16, 2]
);

// Exercise 4)
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no spaces.
let str1 = "javascript";

function addZToString(myString) {
  let myNewString = [];
  myString.split();
  for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    if (index % 2 == 0) {
      myNewString.push(element);
    } else myNewString.push("Z");
  }
  return myNewString.join("");
}
//HINT: You can use  if((i+1) % 2 == 0) to check for even indexes

console.log(
  "Exercise 4 result (addZToString) is:",
  addZToString(str1),
  "it should be",
  "jZvZsZrZpZ"
);

//Exercise 5)
// Given a number n Calculate the factorial of the number
//

let n2 = 6; // 6 * 5 * 4 * 3 * 2 * 1 = 720

function getFactorial(number) {
  let newArr = [];
  for (let index = number; index > 0; index--) {
    newArr.push(index);
  }
  let total = 1;
  for (let index = 0; index < newArr.length; index++) {
    const element = newArr[index];
    total = element * total;
  }
  return total;
}

console.log(
  "Exercise 5 result (getFactorial) is:",
  getFactorial(n2),
  "it should be",
  720
);

//Exercise 6)
//Return an array containing all odd numbers up to and including limitNumber. Don’t include 0.
let limitNumber = 22;

function getOddNumbers(limit) {
  let newArr = [];
  for (let index = 1; index <= limit; index++) {
    const element = index;
    if (element % 2 != 0) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(
  "Exercise 6 result (getOddNumbers) is:",
  getOddNumbers(limitNumber),
  "it should be",
  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
);
