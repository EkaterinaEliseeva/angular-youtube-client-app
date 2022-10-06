import { Component, Input, OnInit } from '@angular/core';
import ISearchItem from 'src/app/core/models/search-item.model';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import ISearchItemStatistics from 'src/app/core/models/search-item-statistcis.model';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'iconViewed',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-viewed.svg'),
    );

    iconRegistry.addSvgIcon(
      'iconLiked',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-liked.svg'),
    );

    iconRegistry.addSvgIcon(
      'iconDisliked',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-disliked.svg'),
    );

    iconRegistry.addSvgIcon(
      'iconSaved',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-saved.svg'),
    );
  }

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
