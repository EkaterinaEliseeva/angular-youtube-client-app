import {
  Component, Input,
} from '@angular/core';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import ISortingParams from 'src/app/core/models/sorting-params.interface';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export default class SortingComponent {
  @Input() isOpen!: boolean;

  private sortParams!: ISortingParams;

  public sortTypes = [SortTypesEnum.date, SortTypesEnum.views];

  constructor(private readonly sortingService: SortingService) {
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

  toggleSortType(sortType: SortTypesEnum | null) {
    this.sortingService.toggleSortType(sortType);
  }

  changeSortBySentence(value: string) {
    this.sortingService.changeFilterBySentence(value);
  }
}
