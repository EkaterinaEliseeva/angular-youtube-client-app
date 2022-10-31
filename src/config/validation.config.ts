const VALIDATION_LABELS = {
  requiredLogin: 'Please enter a login email',
  invalidEmail: 'The login email is invalid',
  requiredPassword: 'Please enter a password',
  weakPassword: 'Your password isn\'t strong enough',
  passwordLength: 'at least 8 characters',
  passwordLetterCase: 'a mixture of both uppercase and lowercase letters',
  passwordLettersAndNumbers: 'a mixture of letters and numbers',
  passwordCharacters: 'inclusion of at least one special character, e.g., ! @ # ? ]',

  requiredTitle: 'Please enter a title',
  shortTitle: 'The title is too short',
  longTitle: 'The title is too long',
  longDescription: 'The description is too long',
  requiredImgLink: 'Please enter a link to the image',
  invalidImgLink: 'The image link is invalid',
  requiredVideoLink: 'Please enter a link to the video',
  invalidVideoLink: 'The video link is invalid',
  requiredDate: 'Please enter a creation date',
  invalidDate: 'The date is invalid',
};

export default VALIDATION_LABELS;
