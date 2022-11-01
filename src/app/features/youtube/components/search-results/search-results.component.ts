import { Component } from '@angular/core';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import SearchService from 'src/app/core/services/search/search.service';
import ISortingParams from 'src/app/core/models/sorting-params.interface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  private sortParams!: ISortingParams;

  public items!: ISearchItem[];

  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService,
  ) {
    this.sortingService.sortingParams.subscribe((params) => {
      this.sortParams = params;
    });

    this.searchService.items.subscribe((items) => {
      this.items = items;
    });
  }

  get sortType() {
    return this.sortParams.sortType;
  }

  get sortOrder() {
    return this.sortParams.sortOrder;
  }

  get filterBySentence() {
    return this.sortParams.filterBySentence;
  }
}
