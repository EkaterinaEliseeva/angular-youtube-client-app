import IAppStore from 'src/app/redux/store.model';
import IItem from 'src/app/features/youtube/models/item.model';

const selectItems = (state: IAppStore): IItem[] => state.customItemsStore.customItems;

const CUSTOM_ITEMS_SELECTORS = {
  customItems: selectItems,
};

export default CUSTOM_ITEMS_SELECTORS;
