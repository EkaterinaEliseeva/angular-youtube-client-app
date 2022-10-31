import AbstractFormControl from 'src/app/features/admin/controls/abstract.control';
import { FormControl, Validators } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';

interface IControlErrors {
  maxlength: string;
}

export default class DescriptionControl extends AbstractFormControl<IControlErrors> {
  protected formControl: FormControl;

  protected labels = {
    maxlength: VALIDATION_LABELS.longTitle,
  };

  constructor() {
    super();

    this.formControl = new FormControl('', [Validators.maxLength(255)]);
    this.subscribeToChanges();
  }
}
