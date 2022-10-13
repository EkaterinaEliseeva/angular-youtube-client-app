import ThumbnailsEnum from 'src/app/features/youtube/enums/thumbnails.enum';
import ISearchItemStatistics from 'src/app/features/youtube/models/search-item-statistcis.model';
import IThumbnailModel from 'src/app/features/youtube/models/thumbnail.model';

export default interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Record<ThumbnailsEnum, IThumbnailModel>;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
    defaultLanguage?: string;
  };

  statistics: ISearchItemStatistics;
}
