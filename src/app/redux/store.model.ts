import IItemsStore from 'src/app/features/youtube/stores/items/items-store.model';
import ICustomItemsStore from 'src/app/features/youtube/stores/custom-items/custom-items-store.model';

export default interface IAppStore {
  customItemsStore: ICustomItemsStore;
  itemsStore: IItemsStore;
}
