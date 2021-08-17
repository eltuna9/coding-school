/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var index = 0; index < contacts.length; index++) {
    if (contacts[index]["firstName"] == name) {
      return contacts[index][prop];
    }
    if (contacts[index]["firstName"].hasOwnProperty(name) == false) {
      return "No such contact.";
    }
  }

  /* for (var index = 0; index < contacts.length; index++) {
    if (
      contacts[index].firstName == name &&
      contacts[index].hasOwnProperty(prop)
    ) {
      return contacts[index].prop;
    }
    if (contacts[index]["firstName"].hasOwnProperty(name) == false) {
      return "No such contact.";
    }
    if (ontacts[index].hasOwnProperty(prop) == false) {
      return "No such property.";
    }
  } */
  // Only change code above this line
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));

//Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

let arrayEx1 = [3, 5, 10, 11, 55, 0, 5];

function sum(arr, n) {
  // Only change code below this line
  if (n == 0) {
    return 0;
  } else {
    return arr[n - 1] + sum(arr, n - 1);
  }
  // Only change code above this line
}

console.log(sum(arrayEx1, 3));

/* You are given an object literal representing a part of your musical album collection.
Each album has a unique id number as its key and several other properties.
Not all albums have complete information.

You start with an updateRecords function that takes an object literal,
records, containing the musical album collection, an id, a prop (like artist or tracks),
and a value. Complete the function using the rules below to modify the object passed to the function.

*/

// Setup
var recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop == "tracks" &&
    records[id].hasOwnProperty("tracks") == false
  ) {
    records[id][prop] = [value];
  } else if (prop == "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value == "") {
    delete records[id][prop];
  }
  return records; // fucked around with this for ages, ended up looking up the solution. This was the only line I was missing. not sure why we need to return records here?
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

console.log(recordCollection);

/*   Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
const object = {name: 'antonio'}
delete object.name(?)
Note: A copy of the recordCollection object is used for the tests.*/
