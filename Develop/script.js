// Assignment code here
var generateBtn = document.querySelector("#generate");
// Get references to the #generate element


var password="";
var passwordC="";



function generatePassword () {
  console.log("clicked")

  var Length = prompt('You can chose between 8 to 128 characters to generate your password.');
  console.log(Length);

  
   if (Length < 8 || Length > 128){
     prompt("password must have more than 7 characters and less than 128 characters!");
     Length = parseInt(Length);
   }


  lowercaseChoice = confirm("Would you like lowercase letters in your password?");
  if (lowercaseChoice) {
  passwordC += "abcdefghijklmnopqrstuvwxyz";
  }

  uppercaseChoice = confirm("Would you like uppercase letters in your password?");
  if (uppercaseChoice) {
  passwordC += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  numbersChoice = confirm("How about adding numbers?");
  if (numbersChoice) {
  passwordC += "0123456789";
  }

  symbolsChoice = confirm("Symbols like @ # $ % = + ! ? are highly recommended");
  if (symbolsChoice) {
    passwordC += "@#$%=+!?";
  }
  console.log (passwordC.length)

  for (var i = 0; i < Length; i++) {
      var Pindex = Math.floor(Math.random() * passwordC.length);
      password = password + passwordC[Pindex];
      console.log(password)
      
        }
        return password;
}

    function writePassword() {
    var password = generatePassword();
    console.log (password)
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
      }
    

generateBtn.addEventListener("click", writePassword);