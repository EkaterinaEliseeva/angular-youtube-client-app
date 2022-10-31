import { Component, Input } from '@angular/core';
import ISearchItemStatistics from 'src/app/features/youtube/models/search-item-statistcis.model';

@Component({
  selector: 'app-item-statistics',
  templateUrl: './item-statistics.component.html',
  styleUrls: ['./item-statistics.component.scss'],
})
export default class ItemStatisticsComponent {
  @Input() statistics!: ISearchItemStatistics;
}
