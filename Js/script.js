// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!
// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
// Declacaring Variables
let name = "Fiyyah";
function printGreeting(name) {
  console.log("Greetings, " + name + "!");
}
printGreeting(name);
// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";
// Delcaring variable
function printCool(name) {
  console.log(name + " is cool");
}
printCool(name);
// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
// Declaring variables
function calcCube(num) {
  return num ** 3;
}
console.log(calcCube(5));
// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true
// Delcaring Functios and variables
function isVowel(letter) {
  const vowel = ["a", "e", "i", "o", "u", "y"];
  letter = letter.toLowerCase();
  if (vowel.includes(letter)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
isVowel("b");

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
const aString = [];
function getTwoLengths(string, string1) {
  for (const i in string && string1) {
    let num0 = string.length;
    let num_0 = string1.length;

    aString.push(num0);
    aString.push(num_0);

    return console.log(aString);
  }
}
getTwoLengths("junior", "jesus");

//  F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

const aString1 = ["hello", "what", "is", "up", "dude"];
const cString = [];
let sum = 0;
function getMultipleLengths([]) {
  aString1.forEach((aString1) => {
    sum = aString1.length;
    cString.push(sum);
  });

  console.log(cString);
}

getMultipleLengths(aString1);
// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// console.log(maxOfThree(6, 9, 1));
// => 9
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().
// Declaring variable and function

function maxOfThree(num, num1, num2) {
  if (num > num1 && num > num2) {
    return console.log("The largest number is: " + num);
  } else if (num1 > num && num1 > num2) {
    return console.log("The largest number is: " + num1);
  } else if (num2 > num && num2 > num1) {
    return console.log("The largest number is: " + num2);
  } else {
    return console.log("The numbers are the same.");
  }
}
maxOfThree(6, 8, 5);
// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter
// Declaring Variables and Functions

const arrWords = [
  "BoJack",
  "Princess",
  "Diane",
  "a",
  "Max",
  "Peanutbutter",
  "big",
  "Todd",
];
let total = 0;

function printLongestWord([]) {
  total = arrWords.length;
  // For loop solution
  // for (let i = 0; i < arrWords.length; i++) {
  // 	if (total < arrWords[i].length) {
  // 		console.log(arrWords[i]);
  // 	}

  // }
  // 		For each solution
  arrWords.forEach((arrWords) => {
    if (total < arrWords.length) {
      return console.log(arrWords);
    }
  });
}
printLongestWord(arrWords);
