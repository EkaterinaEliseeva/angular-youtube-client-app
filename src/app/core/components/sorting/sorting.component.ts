import {
  Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import SortOrderEnum from 'src/app/core/enums/sort-order.enum';
import SortTypesEnum from 'src/app/core/enums/sort-types.enum';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export default class SortingComponent implements OnInit, OnChanges {
  @Input() isOpen!: boolean;

  @Input() sortOrder!: SortOrderEnum | null;

  @Input() sortType!: SortTypesEnum | null;

  @Output() eventSortType: EventEmitter<SortTypesEnum | null> = new EventEmitter();

  @Output() eventSortOrder: EventEmitter<SortOrderEnum | null> = new EventEmitter();

  @Output() eventSortBySentence: EventEmitter<string> = new EventEmitter();

  @Input() filterBySentence!: string;

  public sortTypes = [
    {
      type: SortTypesEnum.date,
      isActive: false,
      sortOrder: null,
    },
    {
      type: SortTypesEnum.views,
      isActive: false,
      sortOrder: null,
    },
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'iconSorting',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-sorting.svg'),
    );

    iconRegistry.addSvgIcon(
      'iconSortingArrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-sort-arrow.svg'),
    );
  }

  getNextSortOrder(): SortOrderEnum | null {
    if (!this.sortOrder) {
      return SortOrderEnum.asc;
    } if (this.sortOrder === SortOrderEnum.asc) {
      return SortOrderEnum.desc;
    }

    return null;
  }

  toggleSortType(sortType: SortTypesEnum | null) {
    if (this.sortType === sortType) {
      const sortOrder = this.getNextSortOrder();

      if (!sortOrder) {
        this.eventSortType.emit(null);
      }

      this.eventSortOrder.emit(sortOrder);
    } else {
      this.eventSortType.emit(sortType);
      this.eventSortOrder.emit(SortOrderEnum.asc);
    }
  }

  toggleSortOrder(sortOrder: SortOrderEnum | null) {
    this.eventSortOrder.emit(sortOrder);
  }

  changeSortBySentence(value: string) {
    this.eventSortBySentence.emit(value);
  }

  // eslint-disable-next-line
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortType'] && changes['sortOrder']) {
      this.sortTypes = this.sortTypes
        .map((sortType) => (
          sortType.type === changes['sortType'].currentValue
            ? { ...sortType, isActive: true, sortOrder: changes['sortOrder'].currentValue }
            : { ...sortType, isActive: false, sortOrder: changes['sortOrder'].currentValue }
        ));
    }

    if (changes['sortOrder'] && !changes['sortType']) {
      this.sortTypes = this.sortTypes
        .map((sortType) => (
          sortType.type === this.sortType
            ? { ...sortType, sortOrder: changes['sortOrder'].currentValue }
            : sortType
        ));
    }
  }
}
