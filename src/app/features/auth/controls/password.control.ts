import {
  AbstractControl, FormControl, ValidatorFn, Validators,
} from '@angular/forms';
import PasswordValidationEnum from 'src/app/features/auth/enums/password-validation.enum';
import REGEXP from 'src/config/regexp.config';
import VALIDATION_LABELS from 'src/config/validation.config';
import IPasswordCustomError from 'src/app/features/auth/models/password-custom-error.interface';
import CustomPasswordValidators from 'src/app/features/auth/models/custom-password.validators.type';

export default class PasswordControl {
  private readonly password: FormControl;

  private passwordError: string | null = null;

  private passwordCustomError: IPasswordCustomError[] | null = null;

  labels: Record<PasswordValidationEnum, string> = {
    [PasswordValidationEnum.minLength]: VALIDATION_LABELS.passwordLength,
    [PasswordValidationEnum.letterCase]: VALIDATION_LABELS.passwordLetterCase,
    [PasswordValidationEnum.lettersAndNumbers]: VALIDATION_LABELS.passwordLettersAndNumbers,
    [PasswordValidationEnum.characters]: VALIDATION_LABELS.passwordCharacters,
  };

  constructor() {
    this.password = new FormControl('', [Validators.required, this.customPasswordValidation]);

    this.password.valueChanges.subscribe(() => {
      this.passwordError = this.getError();
      this.passwordCustomError = this.getCustomError();
    });
  }

  private static isMinLength(control: AbstractControl) {
    return control.value.length >= 8;
  }

  private static isLetterCase(control: AbstractControl) {
    return REGEXP.upperAndLowercase.test(control.value);
  }

  private static isLettersAndNumbers(control: AbstractControl) {
    return REGEXP.lettersAndNumbers.test(control.value);
  }

  private static isCharacters(control: AbstractControl) {
    return REGEXP.additionalCharacters.test(control.value);
  }

  private customValidators: CustomPasswordValidators = {
    minLength: PasswordControl.isMinLength,
    letterCase: PasswordControl.isLetterCase,
    lettersAndNumbers: PasswordControl.isLettersAndNumbers,
    characters: PasswordControl.isCharacters,
  };

  customPasswordValidation: ValidatorFn = (control: AbstractControl) => {
    const errorsMap = new Map<PasswordValidationEnum, boolean>();

    Object.keys(PasswordValidationEnum).forEach((key) => {
      const propName = key as PasswordValidationEnum;

      errorsMap.set(propName, !this.customValidators[propName](control));
    });

    return Array.from(errorsMap.values()).some((val) => val) ? { customErrors: errorsMap } : null;
  };

  private getError() {
    const { errors, touched, value } = this.password;
    const isTouched = touched || (!touched && value);

    if (!isTouched) {
      return null;
    }

    if (errors && errors['required']) {
      return VALIDATION_LABELS.requiredPassword;
    }

    if (errors && errors['customErrors']) {
      return VALIDATION_LABELS.weakPassword;
    }

    return null;
  }

  private getCustomError() {
    const {
      dirty, errors, touched, value,
    } = this.password;
    const isTouched = dirty || touched || (!touched && value);

    if (isTouched && errors && !errors['required'] && errors['customErrors']) {
      return Object.keys(PasswordValidationEnum).map((key) => ({
        key,
        error: errors['customErrors'].get(key),
        message: this.labels[key as PasswordValidationEnum],
      }));
    }

    return null;
  }

  get error(): string | null {
    return this.passwordError;
  }

  get customError(): IPasswordCustomError[] | null {
    return this.passwordCustomError;
  }

  get control() {
    return this.password;
  }
}
