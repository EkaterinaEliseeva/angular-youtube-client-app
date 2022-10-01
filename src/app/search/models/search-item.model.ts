import ThumbnailsEnum from 'src/app/search/models/thumbnails.enum';
import ThumbnailModel from 'src/app/search/models/thumbnail.model';
import SearchItemStatisticsModel from 'src/app/search/models/search-item-statistcis.model';

export default interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Record<ThumbnailsEnum, ThumbnailModel>;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  statistics: SearchItemStatisticsModel;
}
