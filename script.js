var passwordLength = ""
var specialCharacters = "!@#$%^&*()";
var numeric= "0123456789"
var lowercase ="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var uppercase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var minlength = "8";


var randomPasswordGenerated = "";



var generateBtn = document.getElementById("generate");




// Assignment Code



const generateButton = document.getElementById("generate")
generateButton.addEventListener("click", writePassword);

// Displays password in the "Your Secure Password"

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Choices for password options (All Booleans but number question for PWlength )

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?");
  if(passwordLength <= minlength);


  alert("Password must be more than 8 characters.")

  prompt ("Please enter a number of 8 or greater.")

  var special = confirm("Do you want special characters in your password?");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

 
  var minimumCount = "8";
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  // for loop for random

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }




  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}





