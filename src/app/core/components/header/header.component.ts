import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  @Input() isShowSorting!: boolean;

  @Output() toggle: EventEmitter<void> = new EventEmitter();

  @Output() changeSearchEvent: EventEmitter<string> = new EventEmitter();

  // eslint-disable-next-line
  ngOnInit() {

  }

  changeSearchQuery(value: string) {
    this.changeSearchEvent.emit(value);
  }

  toggleSorting() {
    this.toggle.emit();
  }
}
