import ISearchItemStatistics from 'src/app/features/youtube/models/search-item-statistcis.model';

export default interface IItem {
  id: string;
  title: string;
  description: string;
  preview: string;
  source: string;
  date: string;
  statistics: ISearchItemStatistics;
  custom: boolean;
}
