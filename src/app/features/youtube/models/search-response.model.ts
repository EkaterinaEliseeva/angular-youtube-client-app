import ISearchItem from 'src/app/features/youtube/models/search-item.model';

export default interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: ISearchItem[];
}
