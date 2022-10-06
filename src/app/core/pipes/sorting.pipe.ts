import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import ISearchItem from 'src/app/core/models/search-item.model';
import SortTypesEnum from 'src/app/core/enums/sort-types.enum';
import SortOrderEnum from 'src/app/core/enums/sort-order.enum';

@Pipe({
  name: 'sorting',
})
export default class SortingPipe implements PipeTransform {
  sortedItems: ISearchItem[] = [];

  private sortByDate(searchItems: ISearchItem[], sortOrder: SortOrderEnum) {
    if (sortOrder === SortOrderEnum.asc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => moment(a.snippet.publishedAt).valueOf() - moment(b.snippet.publishedAt).valueOf(),
      );
    } else if (sortOrder === SortOrderEnum.desc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => moment(b.snippet.publishedAt).valueOf() - moment(a.snippet.publishedAt).valueOf(),
      );
    }
  }

  private sortByViews(searchItems: ISearchItem[], sortOrder: SortOrderEnum) {
    if (sortOrder === SortOrderEnum.asc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount),
      );
    } else if (sortOrder === SortOrderEnum.desc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount),
      );
    }
  }

  transform(
    searchItems: ISearchItem[],
    sortType: SortTypesEnum | null,
    sortOrder: SortOrderEnum | null,
    filterSentence: string,
  ): ISearchItem[] {
    this.sortedItems = searchItems;

    if (sortType === SortTypesEnum.date && sortOrder) {
      this.sortByDate(searchItems, sortOrder);
    } else if (sortType === SortTypesEnum.views && sortOrder) {
      this.sortByViews(searchItems, sortOrder);
    }

    if (!filterSentence) {
      return this.sortedItems;
    }

    return this.sortedItems.filter(
      (item) => item.snippet.title.toLowerCase().includes(filterSentence.toLowerCase()),
    );
  }
}
