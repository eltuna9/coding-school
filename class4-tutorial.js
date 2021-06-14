// Functions!

// Any function, can receive a parameter.
// A parameter can be anything!
// a number
function sumNumbers(n1, n2) {
  return n1 + n2;
}

console.log('sumNumbers', sumNumbers(10, 5));

// strings
function concatenateStrings(s1, s2) {
  return s1 + s2;
}

console.log('ConcatenateStrings', concatenateStrings('Nicol', ' Mouton'));

// objects!! JSON

function mergeObjects(ob1, obj2) {
  //Homework: check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  return Object.assign({}, ob1, obj2);
}

let obj1 = { name: 'Nicol', surname: 'Mouton' };
let obj2 = { age: 27, skill: 'Coder!' };

console.log('Merge objects', mergeObjects(obj1, obj2));

//NOW THE IMNPORTANT BIT here

// You can also pass other functions! 💢, they are usually called Callbacks functions

function easyCallback() {
  console.log('Easy callback has been called bitches!');
}

function annoyingCallback() {
  for (let index = 0; index < 2; index++) {
    console.log('I am sooo annoying!', index);
  }
}

function usingCallback(callback) {
  console.log(
    'We are executing usingEasyCallback now, the next thing is gonna happen is something unknown, whatever the callback decides: ⬇'
  );
  callback();
}

console.log('Executing usingCallback with easyCallback:');
usingCallback(easyCallback);

console.log('Executing usingCallback with annoyingCallback:');
usingCallback(annoyingCallback);

//Callback functions, can also receive parameters:

function callbackWithParameter(number) {
  console.log('The number passed is', number);
}

function usingCallbackWithParameter(callback) {
  console.log('we using a callback with parameter here');
  callback(5);
}

console.log('Executing callback with params:');
usingCallbackWithParameter(callbackWithParameter);

//HOW does it fits into a foreach loop??
[4, 5, 8][(8, 5, 4)];

function reverseForEach() {
  let arrayExample = [4, 5, 8, 9, 6, 2, 45, 78, 56, 158, 1687];
  let newArray = [];
  function forEachCallback(value) {
    newArray.unshift(value);
  }

  arrayExample.forEach(forEachCallback);
  console.log('reversed', newArray);
}

console.log('Executing reverseForEach');
reverseForEach();

function reverseForEachArrowFn() {
  let arrayExample = [4, 5, 8, 9, 6, 2, 45, 78, 56, 158, 1687];
  let newArray = [];
  arrayExample.forEach((num) => {
    newArray.unshift(num);
  });
  console.log('reversed', newArray);
}

function understadingForEach() {
  let arrayExample = [4, 5, 8, 9, 6, 2, 45, 78, 56, 158, 1687];
  function forEachCallback(value, index, array) {
    console.log('value', value);
    console.log('index', index);
    console.log('array', array);
  }

  arrayExample.forEach(forEachCallback);
}

console.log('Executing the function understadingForEach');
understadingForEach();
