var myDog = {
  legs: 4,
  mouth: 1,
  eyes: ["blue", "green"],
};

console.log(myDog);

function addBite(){
myDog.bites = "yes";


//console.log(myDog);

/* function randoFunc(a) {
  if (a >= 2 && a <= 6) {
    return 1;
  } else if (a >= 7 && a <= 9) {
    return 0;
  } else {
    return 50;
  }
}

console.log(randoFunc(8));

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count + 1;
      return count;
  }
  console.log(count);
}
cc(3);
 */
/* cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
 */
/* let array = [1, 6, 9, 34, 22, 10, 1002, 4, 20];

let newArray = [];

function isItBiggerThanTwenty(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element >= 20) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(isItBiggerThanTwenty(array));

function booleanTest(a, b) {
  if (a > b) {
    return "its true";
  } else if (b > a) {
    return "its false";
  } else if (a == b) {
    return "its equal";
  }
}
console.log(booleanTest(3, 3));

function booleanTestTwo(condition) {
  if (condition == true) {
    console.log("its true!!!!");
  } else {
    console.log("its false!!");
  }
}

booleanTestTwo(1 * 3 == 3);
booleanTestTwo(2 * 3 == 5);

/* 
function sortingFunction(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length + 1; index++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

sortingFunction(array);
*/
