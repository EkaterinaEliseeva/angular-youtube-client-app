import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  @Input() isShowSorting!: boolean;

  @Output() toggleEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'iconSettings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-settings.svg'),
    );
  }

  toggleSorting() {
    this.toggleEvent.emit();
  }
}
