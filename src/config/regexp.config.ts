const REGEXP = {
  password: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/,
  upperAndLowercase: /^((?=.*[a-z])(?=.*[A-Z]))/,
  lettersAndNumbers: /^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/,
  additionalCharacters: /[!@#?\]+]/,
};

export default REGEXP;
