import { Component } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export default class SearchFormComponent {
  searchControlPlaceholder = 'What are you want to find out?';

  searchBtnText = 'search';
}
