import {
  Component, Input,
} from '@angular/core';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';
import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortingService from 'src/app/core/services/sorting/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export default class SortingComponent {
  @Input() isOpen!: boolean;

  public sortOrder!: SortOrderEnum | null;

  public sortType!: SortTypesEnum | null;

  public filterBySentence!: string;

  public sortTypes = [SortTypesEnum.date, SortTypesEnum.views];

  constructor(private readonly sortingService: SortingService) {
    this.sortingService.sortOrder.subscribe((sortOrder) => {
      this.sortOrder = sortOrder;
    });

    this.sortingService.sortType.subscribe((sortType) => {
      this.sortType = sortType;
    });

    this.sortingService.filterBySentence.subscribe((filterBySentence) => {
      this.filterBySentence = filterBySentence;
    });
  }

  toggleSortType(sortType: SortTypesEnum | null) {
    this.sortingService.toggleSortType(sortType);
  }

  changeSortBySentence(value: string) {
    this.sortingService.changeFilterBySentence(value);
  }
}
