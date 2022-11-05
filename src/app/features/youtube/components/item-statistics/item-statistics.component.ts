import { Component, Input, OnInit } from '@angular/core';
import ISearchItemStatistics from 'src/app/features/youtube/models/search-item-statistcis.model';

@Component({
  selector: 'app-item-statistics',
  templateUrl: './item-statistics.component.html',
  styleUrls: ['./item-statistics.component.scss'],
})
export default class ItemStatisticsComponent implements OnInit {
  @Input() statistics!: ISearchItemStatistics;

  public isShow: boolean = false;

  ngOnInit() {
    this.isShow = Object.values(this.statistics).every((value) => value);
  }
}
