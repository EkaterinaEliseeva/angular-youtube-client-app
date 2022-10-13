import { Component } from '@angular/core';
import SearchService from 'src/app/core/services/search/search.service';
import SortingService from 'src/app/core/services/sorting/sorting.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export default class YoutubeComponent {
  public isLoaded!: boolean;

  public isShowSorting!: boolean;

  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService,
  ) {
    this.sortingService.showSorting.subscribe((isShow) => {
      this.isShowSorting = isShow;
    });

    this.searchService.searchQuery.subscribe((value) => {
      this.isLoaded = !!value;
    });
  }
}
