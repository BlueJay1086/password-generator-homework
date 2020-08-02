// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
   var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   var upperCase = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
   var specialCharacters = ['!', '@', '#', '$', '%', '&', '*', '?', '~']
   var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

   var selectedCharacters = []
   var finalSelection = []
   var password = ''

   var passwordLength = parseInt(prompt("How many charcters should your password be?"));
   if (!(passwordLength >= 8 && passwordLength <= 128)){
       
    window.alert("Please select a number between 8 and 128.");
    passwordLength = parseInt(prompt("How many charcters should your password be?"));

    }

    if(confirm('Would you like lowercase letters?')){
        selectedCharacters.push(lowerCase)
    }
    if(confirm('Would you like uppercase letters?')){
        selectedCharacters.push(upperCase)
    }
    if(confirm("Would you like special characters?")){
        selectedCharacters.push(specialCharacters)
    }
    if(confirm("Would you like numbers?")){
        selectedCharacters.push(numbers)
    }

    for(var i = 0; i < passwordLength; i++){
        var characterType = Math.floor(Math.random() * selectedCharacters.length)
        var characterSelect = Math.floor(Math.random() * selectedCharacters[characterType].length)
        var select = selectedCharacters[characterType][characterSelect]
        finalSelection.push(select)
    }

    finalSelection.forEach((element) => {
        password += element;
    })

    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

str.toUpperCase()