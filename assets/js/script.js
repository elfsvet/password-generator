// Assignment code here

// all characters what we can use
var charactersType = {
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharacters: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~']
}

// choose a random character from a list/ needs provide a list as an argument
var randomCharacterFromList = function (list) {
  return list[Math.floor(Math.random() * list.length)];
}
// a choice of a single character from a list
var randomUpperCase = randomCharacterFromList(charactersType.upperCase);
var randomLowerCase = randomCharacterFromList(charactersType.lowerCase);
var randomNumber = randomCharacterFromList(charactersType.numbers);
var randomSpecialCharacter = randomCharacterFromList(charactersType.specialCharacters);


// var randomUpperCase = randomCharacterFromList(charactersType.upperCase);
// var randomLowerCase = randomCharacterFromList(charactersType.lowerCase);
// var randomNum = randomNumber(0,10);
// var randomSpecialCharacter = randomCharacterFromList(charactersType.specialCharacters);

var addToList = function(arrayToUpdate, answer, arrayToAdd) {
  if(answer) {
    arrayToUpdate = arrayToUpdate.concat(arrayToAdd);
  }
  return arrayToUpdate;
}


var chooseConfirm = function() {
  
  // we need generate a array with all accepted characters/letters/numbers
  var listOfCharacters = [];
  // confirm if a user wants: uppercase
  var upperCaseAnswer = confirm("Do you want your password to contain Uppercase letters?");
  // confirm if a user wants: lowercase
  var lowerCaseAnswer = confirm("Do you want your password to contain Lowercase letters?");
  // confirm if a user wants: numbers
  var numberAnswer = confirm("Do you want your password to contain numbers?");
  // confirm if a user wants: special characters
  var specialCharactersAnswer = confirm("Do you want your password to contain special characters?");
  // all answers in an object
  var answers = {
    upperCase: upperCaseAnswer,
    lowerCase: lowerCaseAnswer,
    numbers: numberAnswer,
    specialCharacters: specialCharactersAnswer
  }
  // if all answers No a user need to choose at least one option to have a password
  if (!upperCaseAnswer && !lowerCaseAnswer && !numberAnswer && !specialCharactersAnswer) { // we might try while later!!!!!!!!!!!
    window.alert("You need to choose at least one option, or you will not get anything.")
    chooseConfirm();
  }
  // if answer of a user OK updates array and return it for future random pull from it.
  if(upperCaseAnswer){
    listOfCharacters = addToList(listOfCharacters,upperCaseAnswer,charactersType.upperCase);
  }
  if(lowerCaseAnswer){
    listOfCharacters = addToList(listOfCharacters,lowerCaseAnswer,charactersType.lowerCase);
  }
  if(numberAnswer){
    listOfCharacters = addToList(listOfCharacters,numberAnswer,charactersType.numbers);
  }
  if(specialCharactersAnswer){
    listOfCharacters = addToList(listOfCharacters,specialCharactersAnswer,charactersType.specialCharacters);
  }
  
  
  
  return listOfCharacters;
};

// we need to add all selected characters in to an array to choose from.



var generatePassword = function () {
  //we would need a string to assign result to 
  var readyPassword = "";
  
  // ask what the length a user wants their password to be. From 8 - 128 characters and check if user entered numbers if it's something else it will return NaN, and float will be whole number/ does wrong with fractions MAY NEED TO USE A RULE WITH USING '/'
  var amountOfCharacters = parseInt(window.prompt("How many characters would you like your password to be?\nChoose between 8 and 128 characters."));
  // if a user did not input any information or the 8>length of password>128
  if (!amountOfCharacters || amountOfCharacters < 8 || amountOfCharacters > 128) {
    window.alert("Wrong input, try again.");
    generatePassword();
  } else { // if all correct with input for the length.

    while (amountOfCharacters >= 0) {
      var result = [];
      result.push(charactersType.upperCase[randomNumber()])

    }
  }
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


