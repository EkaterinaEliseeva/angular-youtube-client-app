import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import SearchService from 'src/app/core/services/search/search.service';
import ISortingParams from 'src/app/core/models/sorting-params.interface';
import IAppStore from 'src/app/redux/store.model';
import ITEMS_SELECTORS from 'src/app/features/youtube/stores/items/selectors/items.selector';
import ICustomItem from 'src/app/features/youtube/stores/custom-items/custom-item.interface';
import CUSTOM_ITEMS_SELECTORS from 'src/app/features/youtube/stores/custom-items/selectors/custom-items.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  private sortParams!: ISortingParams;

  public items: ISearchItem[] = [];

  public customItems: ICustomItem[] = [];

  public items$: Observable<ISearchItem[]>;

  public customItems$: Observable<ICustomItem[]>;

  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService,
    private readonly store: Store<IAppStore>,
  ) {
    this.items$ = this.store.select(ITEMS_SELECTORS.items);
    this.customItems$ = this.store.select(CUSTOM_ITEMS_SELECTORS.customItems);

    this.items$.subscribe((items) => {
      this.items = items;
    });

    this.customItems$.subscribe((items) => {
      this.customItems = items;
    });

    this.sortingService.sortingParams.subscribe((params) => {
      this.sortParams = params;
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
