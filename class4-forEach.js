// Exercises to practices loops! aka rabbit holes 🤣

// Exercise 1)
// Get the sum of all the elements of an array of numbers

let exampleArray1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

function sumOfAllElements(array) {
  let bucket = 0;
  array.forEach((element) => {
    bucket += element;
  });
  return bucket;
}
console.log(
  "Exercise 1 result (sumOfAllElements) is:",
  sumOfAllElements(exampleArray1),
  "it should be",
  276
);

// Exercise 2)
// Using a for each loop output the elements in reverse order
let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];

function reverseOrder(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.unshift(element);
  });
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
  array.forEach((element) => {
    if (element % 2 == 0) {
      newArray.push(element);
    }
  });
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
// there are no spaces
/* let str1 = "javascript";
function addZToString(myString) {
  let array = myString.split("");
  let newArray = [];

  array.forEach((element, index) => {
    if ((index + 1) % 2 !== 0) {
      newArray.push(element);
    } else {
      newArray.push("Z");
    }
  });
  return newArray.join("");
} */

let str1 = "javascript";
function addZToString(myString) {
  let array = myString.split("");
  let newString = "";

  array.forEach((element, index) => {
    if ((index + 1) % 2 !== 0) {
      newString += element;
    } else {
      newString += "Z";
    }
  });
  return newString;
}

console.log(
  "Exercise 4 result (addZToString) is:" + addZToString(str1) + "it should be",
  "jZvZsZrZpZ"
);

//Exercise 5)
// Given a number n Calculate the factorial of the number
//https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n

let n2 = 6; // 6 * 5 * 4 * 3 * 2 * 1 = 720

function getFactorial(number) {
  let newArray = []; //[6,5,4,3,2,1]
  for (let index = number; index >= 1; index--) {
    newArray.push(index);
  }
  let bucket = 1;
  newArray.forEach((element) => {
    bucket *= element; // bucket = bucket * element;
  });
  return bucket;
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
  let newArray = [];
  let oddNumbersArray = [];
  for (let index = 1; index < limit; index++) {
    newArray.push(index);
  }
  newArray.forEach((element) => {
    if (element % 2 !== 0) {
      oddNumbersArray.push(element);
    }
  });
  return oddNumbersArray;
}

console.log(
  "Exercise 6 result (getOddNumbers) is:",
  getOddNumbers(limitNumber),
  "it should be",
  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
);

let someArray = [1, 2, 3, 4];

//someArray.array.forEach((bob, dumbIndex, fuckingArray) => {});

// something of this sort is happening inside that array.forEach
function forEachForNicol(array, funct) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    funct(element, index, array);
  }
}

let age = 31;
//ternary oprator
//its  the same as an IF sentece, but writen inline
let canDrink = age > 18 ? "Can drink" : "Cannot drink";
// this is exactly the same as
let candrink;
if (age > 18) candrink = "Can drink";
else candrink = "Cannot drink";

forEachForNicol([3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2], (e, i, a) =>
  console.log(e, i, a !== undefined ? a : undefined)
);

// sorting algorithms; small to big
let arrayToSort = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let sortedarray = arrayToSort.sort((a, b) => {
  return a - b;
});

//console.log("sorted with js built in func", sortedarray);
function sortArray(arr) {
  let count = 0;
  console.log("STARTING BUBBLE SORT! =)");
  for (var i = 0; i < arr.length; i++) {
    console.log("FIRST LOOP, INDEX", i, "element", arr[i]);
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      count++;
      console.log(
        "second LOOP, INDEX",
        j,
        "element",
        arr[j],
        "superior limit",
        arr.length - i - 1
      );
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("Array after iteration", arr);
  }
  console.log(count);
  return arr;
}
console.log("sorted with our implementation", sortArray(arrayToSort));

//google "implementation of forEach Javascript"
function myNewFunction(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
