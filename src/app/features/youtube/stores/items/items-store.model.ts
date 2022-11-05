import IItem from 'src/app/features/youtube/models/item.model';

export default interface IItemsStore {
  items: IItem[],
  isLoaded: boolean;
}
