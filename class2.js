// First, we checked out different ways to declarte variables
// variables live in the computer memory, they consume your RAM, random access memory, super fast
// also learnt some primitives: string, number, null, undefined, function, symbol, bigint, object
var myValue = null;
var nothinHere = undefined;
const thisNeverChanges = 5;

// if you uncomment the line bellow the script is gonna crash, const cannnot be redifined
// thisNeverChanges = 6;

let anotherVariable = 'asdas';

// Secondly, we saw how let can only be used inside the block scope curly braces, see how the console log in line 23 is going to fail but if you change it to var, it works
// the take away here, try to use let as it kinda encourages you to write cleaner code
// var -> function scope
// let -> block scope
// const -> block scope
{
  console.log('we got into the if statement');
  let goodMessage = 'You fucked up!';
  let badMessage = 'You good';
}
// console.log(goodMessage);

// Thirdly, we started lookin at objects!! JSON objects 😎
// objects are a type that allow us to store more than just one value, using properties
// objects are composed by properties, properties are declared using the syntax propertyName: propertyValue
// objects encapsulates multiple stuff related, for example the nicol object down here

const nicol = {
  height: 1.82,
  weight: 90,
  gender: 'male',
  nativeLanguage: 'English',
  name: 'Nicol Mouton',
  head: {
    hairColor: 'brown',
    noseLength: '3cm',
  },
  sing: function () {
    alert('nicol is fricking singing!! 😯');
  },
};

console.log('nicol gender is:' + nicol.gender);
console.log('nicol native language is:' + nicol.nativeLanguage);
// as objects can also contain functions, we could call a function that lives inside an object
nicol.sing();

// Fourthly, arrays!!
//Arrays are declared using squate brackets, and usually represent a collection of things

const countries = ['Australia', 'Argentina', 'South Africa'];

// You access an array, referencing the vairable name and swuare brackets with the index of the element you want to use.
// Arrays have zero-based indexes, meaning that the first element is the index 0

console.log(countries[0]);

// What happen if I reference an inexisting index?
console.log(countries[9]); //undefined

//You can also declare an array of objects! or whatever you want

const arrayOfCars = [
  {
    brand: 'Ford',
    model: 'Mustang',
  },
  {
    brand: 'Mitsibishi',
    model: 'Lancer',
    engine: {
      valves: 7,
      pistons: {
        whatever: 'something',
        elementsOfPistons: ['elemtn1', 'elemtn1'],
      },
    },
  },
  {
    brand: 'Ferrari',
    model: 'Expensive',
  },
];

//Then you can reference properties inside the objects of this array
console.log(arrayOfCars[1].engine.pistons.elementsOfPistons[0]);

// Fifthly, functions
// a function is basically a set of instructions that can be executed on demand.
// you delcare a function with the syntax bellow

function thisIsTheFunctionName() {}

// A function can accept parameters to be used inside the scope of the function, the are just as normal variables declared inside the function
function sayHiIfIGiveYouABigNumber(number) {
  if (number > 100) console.log('Hi bitches');
}

//To run a function, you write the function name with the parenthesis and the parameter values, if you dont write the parameter value, javascript is gonna take it as undefined
sayHiIfIGiveYouABigNumber(1500); //Hi bitches
sayHiIfIGiveYouABigNumber(); // nothing

//functions can receive as many parameter as you want, but as a good practice, leave it less than 5,
//otherwise you surely are doing something wrong and need to rethink the way you are solving it

function decideIfGoToSchoolOrNot(isRaining, isSaturday, iGiveAFuck) {
  if (!isRaining && !isSaturday && iGiveAFuck) console.log('Going to school');
  else console.log('Not going to school');
}

decideIfGoToSchoolOrNot(true, true, false); // Not going to school
decideIfGoToSchoolOrNot(false, false, true); // Going to school

// Functions can be void, meaning that they do not return anything, but they can also return shit.
function voidFunction() {
  console.log('I njust execute this, thats all');
}

// you return something using the magic return word :)
function gimmeTheDate() {
  return new Date();
}

// then you can save that in a variable for example
const today = gimmeTheDate();
console.log('Today date is: ' + today);

//you can alsow declare functions with a different syntax
const myArrowFunction = () => {
  console.log('this is an arrow function');
};

// Exercise time!!!

// Write a function called getFuckedNumber,
// that given any number as a parameter, it will mutiply it by 54, then substract 12, and then divide the result by 12,5
// then console.log() the execution of this function for the numbers 1, 5 , 150, -78

function getFuckedNumber(parameter) {
  console.log((parameter * 54 - 12) / 12.5);
}
getFuckedNumber(1);
getFuckedNumber(5);
getFuckedNumber(150);
getFuckedNumber(-78);

// Last topic for second class, LOOPS

// Loops are a way to iterate over "iterable" variables, example of iterable variables are arrays and strings
// Lets iterate over an array just for fun

const arrayOfNumbers = [1, 5, 150, -78];

//There are a few ways to iterate over this array

// you can use a for loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for (let index = 0; index < arrayOfNumbers.length; index++) {
  // lets deconstruct this line above
  // we declare the variable index and initialize it with the value 0; while the value of index is less than the lenght of arrayOfNumbers (4); increment index by one (index++)
  // index++ is just a shortcut for index = index +1;
  console.log('The current index value is: ', index);
  console.log('The value for the array is: ', arrayOfNumbers[index]);
}

//you could also use a foreach loop,
// a foreach loop is a property of the array object, thats why we call it using arrayOfNumbers.forEach, remember when we declared nicol.sing
console.log('running for each');
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
arrayOfNumbers.forEach((element) => {
  //remember this is just a different way of declaring a function: () => {code here}; see line 131
  console.log('The element is', element);
});

//Example on iterating over a strings

const aVeryLargeString = 'This iss a fricking very large string I dont know why but that is true';

// lets iterate over this strings
for (let index = 0; index < aVeryLargeString.length; index++) {
  const letter = aVeryLargeString[index];
  console.log('The letter with index', index, 'is', letter);
}

//Exercise for home! feel free to google a little bit to complete it

//Exercise 1
// write a function reverseText(text), that accepts a text as a parameter, and returns the same text but backwards

//Exercise 2
//Write a capitalizeText(text) function that Converts Every First Letter Of A Paragraph To Capital.
// to do uppercase you go letter.toUpperCase() or something like that google it
