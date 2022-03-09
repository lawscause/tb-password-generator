export default class PasswordGenerator {
  constructor(
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
    this.upperLetters = upperLetters;
    this.lowerLetters = lowerLetters;
    this.numbers = numbers;
    this.symbols = symbols;
    this.passwordLength = passwordLength;
    this.useUpperCase = useUpperCase;
    this.uselowerCase = uselowerCase;
    this.useNumbers = useNumbers;
    this.useSymbols = useSymbols;

    console.log(
      upperLetters,
      lowerLetters,
      numbers,
      symbols,
      passwordLength,
      useUpperCase,
      uselowerCase,
      useNumbers,
      useSymbols
    );
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  static upperLettersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static lowerLettersStr = "abcdefghijklmnopqrstuvwxyz";
  static numbersStr = "0123456789";
  static symbolsStr = "!@#$%^&*()_+=";

  //select a letter at random  from the lowerLetters string
  //Math.random() generates a random mumber between 0 and 1
  //multiplie that random number by the length of the lowerLetters string
  //Math.floor() rounds a number DOWNWARDS to the nearest integer, and returns the result.
  //so we find the floor of the random number multipled by the length of the string to get an index
  //we use that index to select a character from the string because a string is an array of characters.
  #getLowercase() {
    console.log("getLowercase ");

    console.log("getLowercase lowerLetters: ", this.lowerLetters);
    return this.lowerLetters[
      Math.floor(Math.random() * this.lowerLetters.length)
    ];
  }

  //select a letter at random  from the upperLetters string
  #getUppercase() {
    console.log("getUppercase ");
    console.log("getUppercase upperLetters: ", this.upperLetters);
    return this.upperLetters[
      Math.floor(Math.random() * this.upperLetters.length)
    ];
  }

  //select a number at random from the numbers string
  #getNumber() {
    console.log("getNumber ");
    console.log("getNumber numbers: ", this.numbers);
    return this.numbers[Math.floor(Math.random() * this.numbers.length)];
  }

  //select a symbol at random from the symbols string
  #getSymbol() {
    console.log("getSymbol ");
    console.log("getSymbol symbols: ", this.symbols);
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }

  //generate a password that is the length selected by the user
  //determine whether the user has selected a checkbox that indicates
  //which type of characters to include in the password
  //for each type of character selected add a character at random
  //until the password is long enough
  //insure that the password includes at least one of the character types
  //of the type selected to meet the user's criteria
  generatePassword() {
    console.log("generatePassword ");

    console.log("passwordLength, ", this.passwordLength);

    //set the password to an empty string to begin
    this.password = "";

    //add a random uppercase letter if the upperCaseCheckBox is selected.

    console.log("generatePassword useUpperCase, ", this.useUpperCase);
    if (this.useUpperCase) {
      this.password += this.#getUppercase();
    }

    //add a random lowercase letter if the lowerCaseCheckBox is selected.

    console.log("generatePassword uselowerCase, ", this.uselowerCase);
    if (this.uselowerCase) {
      this.password += this.#getLowercase();
    }

    //add a number at random if the numberCheckBox is selected.
    console.log("generatePassword useNumbers, ", this.useNumbers);
    if (this.useNumbers) {
      this.password += this.#getNumber();
    }

    //add a symbol at random if the symbolCheckBox is selected.

    console.log("generatePassword useSymbols, ", this.useSymbols);
    if (this.useSymbols) {
      this.password += this.#getSymbol();
    }

    //start with the length of the current password and
    //keep adding characters while the password length
    //is less than the desired length
    for (let i = this.password.length; i < this.passwordLength; i++) {
      const x = this.#generateX();
      this.password += x;
    }

    //set the innerText of the passwordElement to the password
    //that has been generated.
    return this.password;
  }

  //create an array to hold all the characters
  //add a character of that type if the type checkbox is checked
  //then select a character at random and return that character
  #generateX() {
    console.log("generateX ");
    const xs = []; //create an array to hold  potential characters

    //add an uppercase character if selected
    if (this.useUpperCase) {
      xs.push(this.#getUppercase());
    }

    //add a lowercase characer if selected
    if (this.uselowerCase) {
      xs.push(this.#getLowercase());
    }

    //add number character if selected
    if (this.useNumbers) {
      xs.push(this.#getNumber());
    }

    //add a symbol character if selected
    if (this.useSymbols) {
      xs.push(this.#getSymbol());
    }

    //return empty string if none of the checkboxes are selected
    if (xs.length === 0) return "";

    //return one of the characters from those staged at random
    return xs[Math.floor(Math.random() * xs.length)];
  }

  toString() {
    console.log("toString called");
    return `Password Generator: upperLetters=${this.upperLetters},
      lowerLetters=${this.lowerLetters},
      numbers=${this.numbers},
      symbols=${this.symbols},
      passwordLength=${this.passwordLength},
      useUpperCase=${this.useUpperCase},
      uselowerCase=${this.uselowerCase},
      useNumbers=${this.useNumbers},
      useSymbols=${this.useSymbols},
      password=${this.password}`;
  }
}
