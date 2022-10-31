import { FormControl } from '@angular/forms';

export default abstract class AbstractFormControl<ErrorTypes extends Object> {
  protected abstract formControl: FormControl;

  protected abstract labels: Record<keyof ErrorTypes, string>;

  private formControlError: string | null = null;

  protected subscribeToChanges() {
    this.formControl.valueChanges.subscribe(() => {
      this.formControlError = this.getError();
    });
  }

  private getError() {
    const {
      dirty, errors, touched, value,
    } = this.formControl;

    const isTouched = dirty || touched || (!touched && value);

    if (!isTouched || !errors) {
      return null;
    }

    const errorKeys = Object.keys(errors);

    if (errorKeys.length) {
      const key = errorKeys[0] as keyof ErrorTypes;

      return this.labels[key];
    }

    return null;
  }

  get error(): string | null {
    return this.formControlError;
  }

  get control() {
    return this.formControl;
  }
}
