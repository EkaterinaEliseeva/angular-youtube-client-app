import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import ISortingParams from 'src/app/core/models/sorting-params.interface';

@Injectable()
export default class SortingService {
  public showSorting: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public sortingParams = new BehaviorSubject<ISortingParams>({
    sortType: null,
    sortOrder: null,
    filterBySentence: null,
  });

  public toggleSorting() {
    this.showSorting.next(!this.showSorting.getValue());
  }

  public changeFilterBySentence(sentence: string) {
    this.sortingParams.next({
      ...this.sortingParams.getValue(),
      filterBySentence: sentence,
    });
  }

  public toggleSortType(sortType: SortTypesEnum | null) {
    const currentSortType = this.sortingParams.getValue().sortType;

    if (currentSortType === sortType) {
      const sortOrder = this.getNextSortOrder();

      this.changeSortOrder(sortOrder ?? null);
    } else {
      this.changeSortType(sortType);
      this.changeSortOrder(SortOrderEnum.asc);
    }
  }

  private getNextSortOrder(): SortOrderEnum | null {
    const currentSortOrder = this.sortingParams.getValue().sortOrder;
    if (!currentSortOrder) {
      return SortOrderEnum.asc;
    } if (currentSortOrder === SortOrderEnum.asc) {
      return SortOrderEnum.desc;
    }

    return null;
  }

  private changeSortType(sortType: SortTypesEnum | null) {
    this.sortingParams.next({
      ...this.sortingParams.getValue(),
      sortType,
    });
  }

  private changeSortOrder(sortOrder: SortOrderEnum | null) {
    this.sortingParams.next({
      ...this.sortingParams.getValue(),
      sortOrder,
    });
  }
}
