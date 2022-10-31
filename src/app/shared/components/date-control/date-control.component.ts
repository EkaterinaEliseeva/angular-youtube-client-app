import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss'],
})
export default class DateControlComponent {
  @Input() formGroup!: FormGroup;

  @Input() id!: string;

  @Input() placeholder!: string;

  @Input() name!: string;

  @Input() required!: boolean;

  @Input() error!: string | null;
}
