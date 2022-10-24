import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import ISimpleSearchResponse from 'src/app/features/youtube/models/simple-search-response.model';

export default interface ISearchResponse extends ISimpleSearchResponse {
  items: ISearchItem[];
}
