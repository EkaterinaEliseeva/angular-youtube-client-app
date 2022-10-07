import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  @Input() isShowSorting!: boolean;

  @Output() toggleEvent: EventEmitter<void> = new EventEmitter<void>();

  toggleSorting() {
    this.toggleEvent.emit();
  }
}
