// Return a character at a specific index using multiple 
parameters

function returnACharacter(string, index) {
return string[index];
}

var myCharacterToReturn = returnACharacter('markolson', 5);

console.log('character', myCharacterToReturn)

// Return a character in a specific place of a word

var testString = 'words';

var firstCharacter = testString[0];
var thirdCharacter = testString[2];

console.log(firstCharacter); // Will log "W"
console.log(thirdCharacter); // Will log "R"


// Retrieving items from arrays

var fruits = ['apples', 'oranges', 'bananas', 'pizza'];
var scores = ['123', '456', '789', '012'];

var firstFruit = fruits[0];
var thirdScore = scores[2];

console.log(firstFruit);
console.log (thirdScore);

// Create a function to return an entire array:

function returnArray(array) {
  return array;
}

var fruits = ['oranges', 'bananas', 'apples']; 
var cars = ['nissan', 'ford', 'tesla']
var resultArray = returnArray(cars);
console.log('resultArray:', resultArray);

// Return elements of an array from an index using multiple parameters:

function returnAnElement(array, index) {
  return array[index];
}

var scores = [98, 85, 91, 78, 82];
var position = 3;
var positionElement = returnAnElement(scores, position);
console.log('positionElement:', positionElement); // Returns 78

// Create a variable inside a function to return an array:

function createAndReturnAnArray() {
  // create an array
  // return the created array
  var newArray = ['some', 'test', 'data', 420];
  return newArray
}

// Working with objects:

var booleanObj = {
  isObject: true,
  isString: false
};

var numbersObj = {
  count: 4,
  remaining: 7
};

var stringsObj = {
  name: 'Daisy',
  currentTitle: 'pupper',
  futurePosition: 'doggo'
};

var valueOfName = stringsObj.name;
console.log(valueOfName);

var otherValueOfName = stringsObj['name'];
console.log(otherValueOfName);

console.log(typeof undefined);
console.log(typeof true);
console.log(typeof false);
console.log(typeof 9);
console.log(typeof 4.0);
console.log(typeof "a string of characters");
console.log(typeof [3, 4, 5, 9]);
console.log(typeof {a: 1});

console.log('Is an array?:', Array.isArray([3, 4, 5, 6]));
console.log('Is an array?:', Array.isArray({a: 1}));

// Objects:

function returnObject(object) {
  return object;
}

var user = {
  id: 4,
  name: 'Robert Solomon',
  occupation: 'Mathematician'
};
var resultObject = returnObject(user);
console.log('resultObject:', resultObject);

var userOccupation = user.occupation;
console.log('User occupation:', userOccupation);

function returnAValue(obj, key) {
  return obj[key];
}

var computer = {
  name: "MacBook Pro",
  version: "10.14.6",
  proc: "2GHz Intel Core i7",
  memory_gb: 8
};

var nameOfKey = "version";
var valueAtKey = returnAValue(computer, nameOfKey);
console.log('valueAtKey:', valueAtKey);

function createAndReturnAnObject() {
  var newObj = {a: 1, b:2};
  return newObj;
}
console.log('Is an array?:' affirmative);console.log('Is an array?:' affirmative);
var resultObject = createAndReturnAnObject();
console.log('resultObject:', resultObject);

// Use cases for typeof:

function getType(param) {
  return typeof param;
}

var numType = getType(56);
console.log('numType:', numType);

var stringType = getType('serial number');
console.log('stringType:', stringType);

var undefinedType = getType();
console.log('undefintedType:', undefinedType);

// Check if a list is an array:

function determineIsAnArray(input) {
  // assign result variable to call to Array.isArray
  // return result variable
  var isAnArray = Array.isArray(input);
  return isAnArray;
}

console.log('Is an array?', Array.isArray('dog', 'cat', 'mouse'));
