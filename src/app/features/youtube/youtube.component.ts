import { Component } from '@angular/core';
import SearchService from 'src/app/core/services/search/search.service';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import { Store } from '@ngrx/store';
import IAppStore from 'src/app/redux/store.model';
import selectItems from 'src/app/redux/selectors/items.selector';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export default class YoutubeComponent {
  public isLoaded!: boolean;

  public isShowSorting!: boolean;

  constructor(
    private readonly sortingService: SortingService,
    private readonly store: Store<IAppStore>,
  ) {
    const items$ = this.store.select(selectItems);

    items$.subscribe((items) => {
      this.isLoaded = !!items.length;
    });

    this.sortingService.showSorting.subscribe((isShow) => {
      this.isShowSorting = isShow;
    });
  }
}
