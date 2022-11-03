import IAppStore from 'src/app/redux/store.model';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';

const selectItems = (state: IAppStore): ISearchItem[] => state.itemsStore.items;

export default selectItems;
