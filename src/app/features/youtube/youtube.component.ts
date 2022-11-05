import { Component } from '@angular/core';
import SortingService from 'src/app/core/services/sorting/sorting.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export default class YoutubeComponent {
  public isShowSorting!: boolean;

  constructor(
    private readonly sortingService: SortingService,
  ) {
    this.sortingService.showSorting.subscribe((isShow) => {
      this.isShowSorting = isShow;
    });
  }
}
