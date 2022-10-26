import {
  FormControl, Validators,
} from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';

export default class LoginControl {
  private readonly login: FormControl;

  private loginError: string | null = null;

  private labels: Record<string, string> = {
    required: VALIDATION_LABELS.requiredLogin,
    email: VALIDATION_LABELS.invalidEmail,
  };

  constructor() {
    this.login = new FormControl('', [Validators.required, Validators.email]);

    this.login.valueChanges.subscribe(() => {
      this.loginError = this.getError();
    });
  }

  private getError() {
    if (!this.login.touched) {
      return null;
    }

    const errors = this.login?.errors;

    if (errors && errors['required']) {
      return this.labels['required'];
    }

    if (errors && errors['email']) {
      return this.labels['email'];
    }

    return null;
  }

  get error(): string | null {
    return this.loginError;
  }

  get control() {
    return this.login;
  }
}
