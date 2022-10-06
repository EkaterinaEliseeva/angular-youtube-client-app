import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export default class SearchFormComponent {
  @Output() changeInputEvent: EventEmitter<string> = new EventEmitter();

  searchControlPlaceholder = 'What are you want to find out?';

  searchBtnText = 'search';

  changeSearchQuery(value: string) {
    this.changeInputEvent.emit(value);
  }
}
