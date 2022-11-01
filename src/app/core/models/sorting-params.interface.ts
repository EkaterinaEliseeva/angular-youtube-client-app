import SortTypesEnum from 'src/app/features/youtube/enums/sort-types.enum';
import SortOrderEnum from 'src/app/features/youtube/enums/sort-order.enum';

interface ISortingParams {
  sortType: SortTypesEnum | null;
  sortOrder: SortOrderEnum | null;
  filterBySentence: string | null;
}

export default ISortingParams;
