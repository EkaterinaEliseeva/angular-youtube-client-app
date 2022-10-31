const REGEXP = {
  password: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/,
  upperAndLowercase: /^((?=.*[a-z])(?=.*[A-Z]))/,
  lettersAndNumbers: /^(((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/,
  additionalCharacters: /[!@#?\]+]/,
  url: /[(http(s)?):/(www.)?a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&/=]*)/,
};

export default REGEXP;
