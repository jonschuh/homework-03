// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSymbol;
var passwordLength;
var userChoices;
var passwordBlank = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password Function with user input
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain (8-128)?"));

//If parameters are not met, function loop
if(confirmLength <= 8 || confirmLength >= 128) {
  alert("Password length must be between 8 and 128 characters, and may contain numbers and symbols. Please try again.");
  var confirmLength = (prompt("Choose your password, it must be between 8 and 128 characters."));
// Alert letting user know length of password
alert('Your password will have ${confirmLength} characters');
}
else {
  confirmUpperCase = confirm("Click Ok if this will contain Upper Case letters?");
  confirmLowerCase = confirm("Click Ok if this will contain Lower Case letters?");
  confirmNumber = confirm("Click Ok if this will contain Numbers?");
  confirmSymbol = confirm("Click Ok if this will contain Symbols?");
}
if (!confirmUpperCase && !confirmLowerCase && !confirmNumber && !confirmSymbol) {
  userChoices = alert("You must choose a criteria");

} 
else if (confirmUpperCase && confirmLowerCase && confirmNumber && confirmSymbol) {
  userChoices = upperCase.concat(lowerCase, number, symbol);
}
if (confirmUpperCase && confirmLowerCase && confirmNumber) {
  userChoices = upperCase.concat(lowerCase, number);
}
else if (confirmUpperCase && confirmLowerCase && confirmSymbol) {
  userChoices = upperCase.concat(lowerCase, symbol);
}
else if (confirmUpperCase && confirmNumber && confirmSymbol) {
  userChoices = upperCase.concat(number, symbol);
}
else if (confirmLowerCase && confirmNumber && confirmSymbol) {
  userChoices = lowerCase.concat(number, symbol);
}
else if (confirmUpperCase && confirmLowerCase) {
  userChoices = upperCase.concat(lowerCase);
}
else if (confirmUpperCase && confirmNumber) {
  userChoices = upperCase.concat(number);
}
  else if (confirmUpperCase && confirmSymbol) {
    userChoices = upperCase.concat(symbol);
}
else if (confirmLowerCase && confirmNumber) {
  userChoices = lowerCase.concat(number);
}
else if (confirmLowerCase && confirmSymbol) {
  userChoices = lowerCase.concat(symbol);
}
else if (confirmNumber && confirmSymbol) {
  userChoices = number.concat(symbol);
}
else if (confirmUpperCase) {
  userChoices = upperCase;
}
else if (confirmLowerCase) {
  userChoices = lowerCase;
}
else if (confirmNumber) {
  userChoices = number;
}
else if (confirmSymbol) {
  userChoices = symbol;
}

  // Random math selection loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
}
var password = passwordBlank.join("");
console.log("Your new secure password is: " + password);
return password;
}




