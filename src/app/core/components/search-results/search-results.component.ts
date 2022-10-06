import { Component, Input } from '@angular/core';
import searchResponseMock from 'src/app/core/mocks/search-response.mock';
import SortOrderEnum from 'src/app/core/enums/sort-order.enum';
import SortTypesEnum from 'src/app/core/enums/sort-types.enum';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  @Input() sortOrder!: SortOrderEnum | null;

  @Input() sortType!: SortTypesEnum | null;

  @Input() filterBySentence!: string;

  public searchResponse = searchResponseMock;
}
