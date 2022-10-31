import { Component } from '@angular/core';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import SearchService from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  public sortOrder!: SortOrderEnum | null;

  public sortType!: SortTypesEnum | null;

  public filterBySentence!: string;

  public items!: ISearchItem[];

  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService,
  ) {
    this.sortingService.sortOrder.subscribe((sortOrder) => {
      this.sortOrder = sortOrder;
    });

    this.sortingService.sortType.subscribe((sortType) => {
      this.sortType = sortType;
    });

    this.sortingService.filterBySentence.subscribe((filterBySentence) => {
      this.filterBySentence = filterBySentence;
    });

    this.searchService.items.subscribe((items) => {
      this.items = items;
    });
  }
}
