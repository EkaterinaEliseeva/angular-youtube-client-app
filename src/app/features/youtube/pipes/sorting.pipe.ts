import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import IItem from 'src/app/features/youtube/models/item.model';

@Pipe({
  name: 'sorting',
})
export default class SortingPipe implements PipeTransform {
  sortedItems: IItem[] = [];

  private sortByDate(searchItems: IItem[], sortOrder: SortOrderEnum) {
    if (sortOrder === SortOrderEnum.asc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => moment(a.date).valueOf() - moment(b.date).valueOf(),
      );
    } else if (sortOrder === SortOrderEnum.desc) {
      this.sortedItems = searchItems.slice().sort(
        (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf(),
      );
    }
  }

  private sortByViews(searchItems: IItem[], sortOrder: SortOrderEnum) {
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
    searchItems: IItem[],
    sortType: SortTypesEnum | null,
    sortOrder: SortOrderEnum | null,
    filterSentence: string | null,
  ): IItem[] {
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
      (item) => item.title.toLowerCase().includes(filterSentence.toLowerCase()),
    );
  }
}
