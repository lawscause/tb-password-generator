//select a letter at random  from the lowerLetters string
//Math.random() generates a random mumber between 0 and 1
//multiplie that random number by the length of the lowerLetters string
//Math.floor() rounds a number DOWNWARDS to the nearest integer, and returns the result.
//so we find the floor of the random number multipled by the length of the string to get an index
//we use that index to select a character from the string because a string is an array of characters.
function getLowercase(lowerLetters) {
  console.log("getLowercase ");

  console.log("getLowercase lowerLetters: ", lowerLetters);
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

//select a letter at random  from the upperLetters string
function getUppercase(upperLetters) {
  console.log("getUppercase ");
  console.log("getUppercase upperLetters: ", upperLetters);
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

//select a number at random from the numbers string
function getNumber(numbers) {
  console.log("getNumber ");
  console.log("getNumber numbers: ", numbers);
  return numbers[Math.floor(Math.random() * numbers.length)];
}

//select a symbol at random from the symbols string
function getSymbol(symbols) {
  console.log("getSymbol ");
  console.log("getSymbol symbols: ", symbols);
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//generate a password that is the length selected by the user
//determine whether the user has selected a checkbox that indicates
//which type of characters to include in the password
//for each type of character selected add a character at random
//until the password is long enough
//insure that the password includes at least one of the character types
//of the type selected to meet the user's criteria
export default function generatePassword(
  upperLetters,
  lowerLetters,
  numbers,
  symbols,
  passwordLength,
  useUpperCase,
  uselowerCase,
  useNumbers,
  useSymbols
) {
  console.log("generatePassword ");

  console.log("passwordLength, ", passwordLength);

  //set the password to an empty string to begin
  let password = "";

  //add a random uppercase letter if the upperCaseCheckBox is selected.

  console.log("generatePassword useUpperCase, ", useUpperCase);
  if (useUpperCase) {
    password += getUppercase(upperLetters);
  }

  //add a random lowercase letter if the lowerCaseCheckBox is selected.

  console.log("generatePassword uselowerCase, ", uselowerCase);
  if (uselowerCase) {
    password += getLowercase(lowerLetters);
  }

  //add a number at random if the numberCheckBox is selected.
  console.log("generatePassword useNumbers, ", useNumbers);
  if (useNumbers) {
    password += getNumber(numbers);
  }

  //add a symbol at random if the symbolCheckBox is selected.

  console.log("generatePassword useSymbols, ", useSymbols);
  if (useSymbols) {
    password += getSymbol(symbols);
  }

  //start with the length of the current password and
  //keep adding characters while the password length
  //is less than the desired length
  for (let i = password.length; i < passwordLength; i++) {
    const x = generateX(
      useUpperCase,
      uselowerCase,
      useNumbers,
      useSymbols,
      upperLetters,
      lowerLetters,
      numbers,
      symbols
    );
    password += x;
  }

  //set the innerText of the passwordElement to the password
  //that has been generated.
  return password;
}

//create an array to hold all the characters
//add a character of that type if the type checkbox is checked
//then select a character at random and return that character
function generateX(
  useUC,
  useLC,
  useNums,
  useSyms,
  upLetters,
  lowLetters,
  nums,
  syms
) {
  console.log("generateX ");
  const xs = []; //create an array to hold  potential characters

  //add an uppercase character if selected
  if (useUC) {
    xs.push(getUppercase(upLetters));
  }

  //add a lowercase characer if selected
  if (useLC) {
    xs.push(getLowercase(lowLetters));
  }

  //add number character if selected
  if (useNums) {
    xs.push(getNumber(nums));
  }

  //add a symbol character if selected
  if (useSyms) {
    xs.push(getSymbol(syms));
  }

  //return empty string if none of the checkboxes are selected
  if (xs.length === 0) return "";

  //return one of the characters from those staged at random
  return xs[Math.floor(Math.random() * xs.length)];
}

const upperLettersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLettersStr = "abcdefghijklmnopqrstuvwxyz";
const numbersStr = "0123456789";
const symbolsStr = "!@#$%^&*()_+=";
