import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';

@Injectable()
export default class SortingService {
  public showSorting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public sortType
  : BehaviorSubject<SortTypesEnum | null> = new BehaviorSubject<SortTypesEnum | null>(null);

  public sortOrder
  : BehaviorSubject<SortOrderEnum | null> = new BehaviorSubject<SortOrderEnum | null>(null);

  public filterBySentence: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public toggleSorting() {
    this.showSorting.next(!this.showSorting.getValue());
  }

  public changeFilterBySentence(sentence: string) {
    this.filterBySentence.next(sentence);
  }

  public toggleSortType(sortType: SortTypesEnum | null) {
    const currentSortType = this.sortType.getValue();

    if (currentSortType === sortType) {
      const sortOrder = this.getNextSortOrder();

      this.changeSortOrder(sortOrder ?? null);
    } else {
      this.changeSortType(sortType);
      this.changeSortOrder(SortOrderEnum.asc);
    }
  }

  private getNextSortOrder(): SortOrderEnum | null {
    const currentSortOrder = this.sortOrder.getValue();
    if (!currentSortOrder) {
      return SortOrderEnum.asc;
    } if (currentSortOrder === SortOrderEnum.asc) {
      return SortOrderEnum.desc;
    }

    return null;
  }

  private changeSortType(sortType: SortTypesEnum | null) {
    this.sortType.next(sortType);
  }

  private changeSortOrder(sortOrder: SortOrderEnum | null) {
    this.sortOrder.next(sortOrder);
  }
}
