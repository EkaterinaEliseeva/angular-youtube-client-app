import { Component } from '@angular/core';
import SearchService from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export default class SearchFormComponent {
  searchControlPlaceholder = 'What are you want to find out?';

  searchBtnText = 'search';

  constructor(private readonly searchService: SearchService) {
  }

  changeSearchQuery(value: string) {
    this.searchService.changeSearchQuery(value);
  }
}
