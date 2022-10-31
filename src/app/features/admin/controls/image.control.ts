import AbstractFormControl from 'src/app/features/admin/controls/abstract.control';
import { FormControl, Validators } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';
import REGEXP from 'src/config/regexp.config';

interface IControlErrors {
  required: string;
  pattern: string
}

export default class ImageControl extends AbstractFormControl<IControlErrors> {
  protected formControl: FormControl;

  protected labels = {
    required: VALIDATION_LABELS.requiredImgLink,
    pattern: VALIDATION_LABELS.invalidImgLink,
  };

  constructor() {
    super();

    this.formControl = new FormControl('', [Validators.required, Validators.pattern(REGEXP.url)]);
    this.subscribeToChanges();
  }
}
