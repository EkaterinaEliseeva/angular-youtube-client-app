import AbstractFormControl from 'src/app/features/admin/controls/abstract.control';
import { FormControl, Validators } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';

interface IControlErrors {
  required: string;
  minlength: string;
  maxlength: string;
}

export default class TitleControl extends AbstractFormControl<IControlErrors> {
  protected formControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);

  protected labels = {
    required: VALIDATION_LABELS.requiredTitle,
    minlength: VALIDATION_LABELS.shortTitle,
    maxlength: VALIDATION_LABELS.longTitle,
  };

  constructor() {
    super();

    this.formControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.subscribeToChanges();
  }
}
