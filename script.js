/* 
    grab the values for each element on the screen
    that we intend to manipulate
*/
const passwordElement = document.getElementById("pw");
const copyElement = document.getElementById("copy");
const lengthElement = document.getElementById("len");
const sliderElement = document.getElementById("slider");
const upperCaseCheckBox = document.getElementById("upper");
const lowerCaseCheckBox = document.getElementById("lower");
const numberCheckBox = document.getElementById("number");
const symbolCheckBox = document.getElementById("symbol");
const generateButton = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

generateButton.disabled = true;

/*
function updatePasswordLength(aRangeInput) {
  console.log("aRangeInput, ", aRangeInput);

  lengthElement.innerText = sliderElement.value;
  console.log("sliderElement.value, ", sliderElement.value);
  console.log("lengthElement.innerText, ", lengthElement.innerText);
}*/

//update the length shown based on the slider value
//a reference to the slider range input is passed in as a variable
function updatePasswordLength(aRangeInput) {
  console.log("aRangeInput, ", aRangeInput);

  lengthElement.innerText = aRangeInput.value;
  console.log("sliderEl.value, ", sliderElement.value);
  console.log("lenEl.innerText, ", lengthElement.innerText);
}

//select a letter at random  from the lowerLetters string
//Math.random() generates a random mumber between 0 and 1
//multiplie that random number by the length of the lowerLetters string
//Math.floor() rounds a number DOWNWARDS to the nearest integer, and returns the result.
//so we find the floor of the random number multipled by the length of the string to get an index
//we use that index to select a character from the string because a string is an array of characters.
function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

//select a letter at random  from the upperLetters string
function getUppercase() {
  console.log("getUppercase ");
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

//select a number at random from the numbers string
function getNumber() {
  console.log("getNumber ");
  return numbers[Math.floor(Math.random() * numbers.length)];
}

//select a symbol at random from the symbols string
function getSymbol() {
  console.log("getNumber ");
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//indicate if something is checked
function isTypeOfCharacterChecked() {
  console.log("isTypeOfCharacterChecked ");
  return (
    upperCaseCheckBox.checked ||
    lowerCaseCheckBox.checked ||
    numberCheckBox.checked ||
    symbolCheckBox.checked
  );
}

//generate a password that is the length selected by the user
//determine whether the user has selected a checkbox that indicates
//which type of characters to include in the password
//for each type of character selected add a character at random
//until the password is long enough
//insure that the password includes at least one of the character types
//of the type selected to meet the user's criteria
function generatePassword() {
  console.log("generatePassword ");
  //get the length the user has chosen for the password
  const len = sliderElement.value;

  console.log("generatePassword len, ", len);

  //set the password to an empty string to begin
  let password = "";

  //add a random uppercase letter if the upperCaseCheckBox is selected.

  console.log(
    "generatePassword upperCaseCheckBox.checked, ",
    upperCaseCheckBox.checked
  );
  if (upperCaseCheckBox.checked) {
    password += getUppercase();
  }

  //add a random lowercase letter if the lowerCaseCheckBox is selected.

  console.log(
    "generatePassword lowerCaseCheckBox.checked, ",
    lowerCaseCheckBox.checked
  );
  if (lowerCaseCheckBox.checked) {
    password += getLowercase();
  }

  //add a number at random if the numberCheckBox is selected.
  console.log(
    "generatePassword numberCheckBox.checked, ",
    numberCheckBox.checked
  );
  if (numberCheckBox.checked) {
    password += getNumber();
  }

  //add a symbol at random if the symbolCheckBox is selected.

  console.log(
    "generatePassword symbolCheckBox.checked, ",
    symbolCheckBox.checked
  );
  if (symbolCheckBox.checked) {
    password += getSymbol();
  }

  //start with the length of the current password and
  //keep adding characters while the password length
  //is less than the desired length
  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  //set the innerText of the passwordElement to the password
  //that has been generated.
  passwordElement.innerText = password;
}

//create an array to hold all the characters
//add a character of that type if the type checkbox is checked
//then select a character at random and return that character
function generateX() {
  console.log("generateX ");
  const xs = []; //create an array to hold  potential characters

  //add an uppercase character if selected
  if (upperCaseCheckBox.checked) {
    xs.push(getUppercase());
  }

  //add a lowercase characer if selected
  if (lowerCaseCheckBox.checked) {
    xs.push(getLowercase());
  }

  //add number character if selected
  if (numberCheckBox.checked) {
    xs.push(getNumber());
  }

  //add a symbol character if selected
  if (symbolCheckBox.checked) {
    xs.push(getSymbol());
  }

  //return empty string if none of the checkboxes are selected
  if (xs.length === 0) return "";

  //return one of the characters from those staged at random
  return xs[Math.floor(Math.random() * xs.length)];
}

//generate a password when a button is clicked
//by adding a listener that calls doStartPasswordGeneration when generateButton is clicked
generateButton.addEventListener("click", generatePassword);

//copy the password into the clipboard
copyElement.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordElement.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

upperCaseCheckBox.addEventListener("change", checkSelections);
lowerCaseCheckBox.addEventListener("change", checkSelections);
numberCheckBox.addEventListener("change", checkSelections);
symbolCheckBox.addEventListener("change", checkSelections);

function checkSelections() {
  console.log("checkSelections");
  generateButton.disabled = true;

  if (isTypeOfCharacterChecked()) {
    generateButton.disabled = false;

    console.log(
      "checkSelections generateButton.disabled, ",
      generateButton.disabled
    );
  }
}
