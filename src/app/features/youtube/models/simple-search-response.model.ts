import ISimpleSearchItem from 'src/app/features/youtube/models/simple-search-item.model';

export default interface ISimpleSearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISimpleSearchItem[];
}
