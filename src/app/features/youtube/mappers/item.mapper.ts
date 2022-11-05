import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import IItem from 'src/app/features/youtube/models/item.model';

export default class ItemMapper {
  static map(item: ISearchItem): IItem {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      preview: item.snippet.thumbnails.medium?.url,
      source: item.snippet.thumbnails.maxres?.url,
      statistics: item.statistics,
      date: item.snippet.publishedAt,
      custom: false,
    };
  }
}
