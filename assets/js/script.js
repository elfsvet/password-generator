// Assignment code here

// all characters what we can use for the password. I created an object.I might make arrays, it would be better performance.

var charactersType = {
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharacters: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~']
};

// choose a random character from an array/it needs an array as an argument

var randomCharacterFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var chooseConfirm = function () {

  // we need generate an array with all accepted characters/letters/numbers

  var arrayOfCharacters = [];

  // we created all variables here to get answers from getConfirm() function.

  var confirmUpperCase = "";
  var confirmLowerCase = "";
  var confirmNumbers = "";
  var confirmSpecialCharacters = "";
  var getConfirm = function () {
    // confirm if a user wants: uppercase
    confirmUpperCase = confirm("Do you want your password to contain Uppercase letters?"),
      // confirm if a user wants: lowercase
      confirmLowerCase = confirm("Do you want your password to contain Lowercase letters?"),
      // confirm if a user wants: numbers
      confirmNumbers = confirm("Do you want your password to contain numbers?"),
      // confirm if a user wants: special characters
      confirmSpecialCharacters = confirm("Do you want your password to contain special characters?");
  }
  getConfirm();
  // if all answers No a user need to choose at least one option to have a password
  while (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSpecialCharacters) { // we might try while later!!!!!!!!!!!
    window.alert("You need to choose at least one option, or you will not get anything.");
    getConfirm();
  }
  // DRY
  var addToArray = function (answer, arrayToAdd) {
    if (answer) {
      arrayOfCharacters = arrayOfCharacters.concat(arrayToAdd);
    }
    return arrayOfCharacters;
  };
  // we need to add all selected characters in to an array to choose from.
  arrayOfCharacters = addToArray(confirmUpperCase, charactersType.upperCase);
  arrayOfCharacters = addToArray(confirmLowerCase, charactersType.lowerCase);
  arrayOfCharacters = addToArray(confirmNumbers, charactersType.numbers);
  arrayOfCharacters = addToArray(confirmSpecialCharacters, charactersType.specialCharacters);
  console.log(arrayOfCharacters); // prints correct array.
  //something weird is going on. return runs and returns back to its position  jumps back to return with no values of the true what i input before.RIGHT HERE
  return arrayOfCharacters;
  // return the array we will pick up our characters from
};

var generatePassword = function () {
  //we would need a string to assign result to 
  var readyPassword = "";
  // ask what the length a user wants their password to be. From 8 - 128 characters and check if user entered numbers if it's something else it will return NaN, and float will be whole number/ does wrong with fractions MAY NEED TO USE A RULE WITH USING '/'
  var lengthOfPassword = parseInt(window.prompt("How many characters would you like your password to be?\nChoose between 8 and 128 characters."));
  // while a user did not input any information or the 8>length of password>128
  while (!lengthOfPassword || lengthOfPassword < 8 || lengthOfPassword > 128) {
    window.alert("Wrong input, try again.");
    lengthOfPassword = parseInt(window.prompt("How many characters would you like your password to be?\nChoose between 8 and 128 characters."));
    // generatePassword(); // if we mute it, all works perfectly
  }
  // gets an array of characters and adds random selected one in our result string
  var selectedCharacters = chooseConfirm();
  for (var i = 0; i < lengthOfPassword; i++) {
    readyPassword += randomCharacterFromArray(selectedCharacters);
  }
  return readyPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


