import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export default class ControlComponent {
  @Input() formGroup!: FormGroup;

  @Input() id!: string;

  @Input() placeholder!: string;

  @Input() name!: string;

  @Input() required!: boolean;

  @Input() error!: string | null;
}
