import { Component } from '@angular/core';
import searchResponseMock from 'src/app/core/mocks/search-response.mock';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  public searchResponse = searchResponseMock;
}
