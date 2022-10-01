import SearchItemModel from 'src/app/core/models/search-item.model';

export default interface SearchResponseModel {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItemModel[];
}
