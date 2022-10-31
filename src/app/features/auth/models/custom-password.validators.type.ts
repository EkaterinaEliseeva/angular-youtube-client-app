import PasswordValidationEnum from 'src/app/features/auth/enums/password-validation.enum';
import { AbstractControl } from '@angular/forms';

type CustomPasswordValidators
  = Record<PasswordValidationEnum, (control: AbstractControl) => boolean>;

export default CustomPasswordValidators;
