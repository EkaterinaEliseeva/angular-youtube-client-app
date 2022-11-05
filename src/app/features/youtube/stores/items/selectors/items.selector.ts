import IAppStore from 'src/app/redux/store.model';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import IItem from 'src/app/features/youtube/models/item.model';

const selectItems = (state: IAppStore): IItem[] => state.itemsStore.items;
const selectIsLoaded = (state: IAppStore): boolean => state.itemsStore.isLoaded;

const ITEMS_SELECTORS = {
  items: selectItems,
  isLoaded: selectIsLoaded,
};

export default ITEMS_SELECTORS;
