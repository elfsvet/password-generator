// Assignment code here

// all characters what we can use
var charactersType = {
  upperCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  lowerCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharacters: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~']
}
// creates a random number from min to max, excluding max (need to +1 if you want this max number in the random result)
var randomNumber = function(min, max){
  var value = Math.floor(Math.random()* (max-min)+ min);
  return value;
}
// choose a random character from a list/ needs provide a list as an argument
var randomCharacterFromList = function(list){
  return list[Math.floor(Math.random()*list.length)];
}
// a choice of a single character from a list
var randomUpperCase = randomCharacterFromList(charactersType.upperCase);
var randomLowerCase = randomCharacterFromList(charactersType.lowerCase);
var randomNum = randomCharacterFromList(charactersType.numbers);
var randomSpecialCharacter = randomCharacterFromList(charactersType.specialCharacters);


// var randomUpperCase = randomCharacterFromList(charactersType.upperCase);
// var randomLowerCase = randomCharacterFromList(charactersType.lowerCase);
// var randomNum = randomNumber(0,10);
// var randomSpecialCharacter = randomCharacterFromList(charactersType.specialCharacters);



var chooseConfirm = function(){
  var upperCaseAnswer = confirm("Do you want your password to contain Uppercase letters?");
  var lowerCaseAnswer = confirm("Do you want your password to contain Lowercase letters?");
  var numberAnswer = confirm("Do you want your password to contain numbers?");
  var specialCharactersAnswer = confirm("Do you want your password to contain special characters?");
  // if all answers No a user need to chose at least one
  if(!upperCaseAnswer && !lowerCaseAnswer && !numberAnswer && !specialCharactersAnswer) {
    window.alert("You need to choose at least one option, or you will not get anything.")
    chooseConfirm();
  }
}


// confirm if a user wants: lowercase
// confirm if a user wants: uppercase
// confirm if a user wants: numbers
// confirm if a user wants: special characters






var generatePassword = function() {
  // ask what the length a user wants their password to be. From 8 - 128 characters and check if user entered numbers if it's something else it will return NaN, and float will be whole number/ does wrong with fractions MAY NEED TO USE A RULE WITH USING '/'
  var amountOfCharacters = parseInt(window.prompt("How many characters would you like your password to be? Choose between 8 and 128 characters."));
  // if a user did not input any information or the 8>length of password>128
  if (!amountOfCharacters || 128 < amountOfCharacters < 8) {
    window.alert("Wrong input, try again.");
    generatePassword();
  } else { // if all correct with input for the length.

    while (amountOfCharacters >=0){
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


