// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];


// Array of uppercase characters to be included in password
var upperCasedCharacter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function for getting a random element from an array
function getRandom(arr) {
  var randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
  
}

var userInput = {
  passwordLength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false
}

// Function to prompt user for password options
function getPasswordOptions() {
  userInput.passwordLength = prompt("Length of password? (Between 10 and 64)");
  if (userInput.passwordLength >= 10 && userInput.passwordLength <= 64) {
     userInput.lowercase = confirm("Include lowercase letters? (abc...)?");
     userInput.uppercase = confirm("Include uppercase letters? (ABC..)?");
     userInput.numeric = confirm("Include numbers? (1234..)?");
     userInput.special = confirm("Include special characters? (!@'$£)?");
  }  else {
    alert("Password must be between 10 and 64");
  }
}

//Function to check if value is true
function isTrue(value) {
  return value === true;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
    //If no input selected, throw error
    if (!userInput.lowercase && !userInput.uppercase && !userInput.numeric && !userInput.special) {
      alert ("You must choose one character type to continue - try again.")
    
    //build password with users input choices, alternating output until password length is reached
    } else {
    var userChoices = [userInput.lowercase, userInput.uppercase, userInput.numeric, userInput.special];
    var numOfSelections = userChoices.filter(isTrue).length;    
    var passText = '';
    var lowerRun = 0;
    var upperRun = 0;
    var numericRun = 0;
    var specialRun = 0;

      for (let i = 0; i < userInput.passwordLength; i++) {
        if (userInput.lowercase && lowerRun === 0) {
          passText += getRandom(lowerCasedCharacters);
          lowerRun = 1;

        } else if (userInput.uppercase && upperRun === 0) {
          passText += getRandom(upperCasedCharacter);
          upperRun = 1;

        } else if (userInput.numeric && numericRun === 0) {
          passText += getRandom(numericCharacter);

          numericRun = 1;

        } else if (userInput.special && specialRun === 0) {
          passText += getRandom(specialCharacters);

          specialRun = 1;
        }

        var trackerTotal = lowerRun + upperRun + numericRun + specialRun;

        if(numOfSelections === trackerTotal) {
          var lowerRun = 0;
          var upperRun = 0;
          var numericRun = 0;
          var specialRun = 0;
        }
        
      }
      return passText;
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);