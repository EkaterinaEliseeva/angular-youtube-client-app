import { Component, Input, OnInit } from '@angular/core';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import ISearchItemStatistics from 'src/app/features/youtube/models/search-item-statistcis.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() public item!: ISearchItem;

  public title!: string;

  public previewUrl!: string;

  public statistics!: ISearchItemStatistics;

  private assertInputsProvided(): void {
    if (!this.item) {
      throw new Error('The required input [item] was not provided');
    }
  }

  public ngOnInit(): void {
    // Ensure the input bindings are actually provided at run-time
    this.assertInputsProvided();

    this.previewUrl = this.item.snippet.thumbnails.medium.url;
    this.title = this.item.snippet.title;
    this.statistics = this.item.statistics;
  }
}
