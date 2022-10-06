import { Component, OnInit } from '@angular/core';
import SortTypesEnum from 'src/app/core/enums/sort-types.enum';
import SortOrderEnum from 'src/app/core/enums/sort-order.enum';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export default class YoutubeComponent implements OnInit {
  public searchQuery: string = '';

  public isShowSorting: boolean = false;

  public sortType: SortTypesEnum | null = null;

  public sortOrder: SortOrderEnum | null = null;

  public filterBySentence: string = '';

  public changeSearchQuery(event: string) {
    this.searchQuery = event;
  }

  public toggleSorting() {
    this.isShowSorting = !this.isShowSorting;
  }

  public changeSortType(sortType: SortTypesEnum | null) {
    this.sortType = sortType;
  }

  public changeSortOrder(sortOrder: SortOrderEnum | null) {
    this.sortOrder = sortOrder;
  }

  public changeFilterBySentence(sentence: string) {
    this.filterBySentence = sentence;
  }

  // eslint-disable-next-line
  ngOnInit(): void {
  }
}
