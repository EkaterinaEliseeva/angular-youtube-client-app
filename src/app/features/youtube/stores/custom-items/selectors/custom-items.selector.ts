import IAppStore from 'src/app/redux/store.model';
import ICustomItem from 'src/app/features/youtube/stores/custom-items/custom-item.interface';

const selectItems = (state: IAppStore): ICustomItem[] => state.customItemsStore.customItems;

const CUSTOM_ITEMS_SELECTORS = {
  customItems: selectItems,
};

export default CUSTOM_ITEMS_SELECTORS;
