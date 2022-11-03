import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import IItemsStore from 'src/app/redux/models/items-store.model';

export default interface IAppStore {
  customCards: ISearchItem[];
  itemsStore: IItemsStore;
}
