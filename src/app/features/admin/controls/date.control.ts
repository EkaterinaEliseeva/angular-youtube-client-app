import AbstractFormControl from 'src/app/features/admin/controls/abstract.control';
import {
  AbstractControl, FormControl, ValidatorFn, Validators,
} from '@angular/forms';
import * as moment from 'moment';
import VALIDATION_LABELS from 'src/config/validation.config';

interface IControlErrors {
  required: string;
  date: string
}

export default class DateControl extends AbstractFormControl<IControlErrors> {
  protected formControl: FormControl;

  protected labels = {
    required: VALIDATION_LABELS.requiredVideoLink,
    date: VALIDATION_LABELS.invalidDate,
  };

  constructor() {
    super();

    this.formControl = new FormControl('', [Validators.required, DateControl.customDateValidator]);
    this.subscribeToChanges();
  }

  private static customDateValidator: ValidatorFn = (control: AbstractControl) => {
    const isValid = moment(control.value).isBefore(moment.now());

    return isValid ? null : ({ date: true });
  };
}
