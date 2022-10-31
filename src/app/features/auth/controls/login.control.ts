import { FormControl, Validators } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';
import AbstractFormControl from 'src/app/features/admin/controls/abstract.control';

interface IControlErrors {
  required: string;
  email: string;
}

export default class LoginControl extends AbstractFormControl<IControlErrors> {
  formControl: FormControl;

  protected labels: Record<string, string> = {
    required: VALIDATION_LABELS.requiredLogin,
    email: VALIDATION_LABELS.invalidEmail,
  };

  constructor() {
    super();

    this.formControl = new FormControl('', [Validators.required, Validators.email]);
    this.subscribeToChanges();
  }
}
