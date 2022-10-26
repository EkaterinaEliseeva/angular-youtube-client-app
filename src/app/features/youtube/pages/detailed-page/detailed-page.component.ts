import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';
import SearchService from 'src/app/core/services/search/search.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export default class DetailedPageComponent implements OnInit {
  public pageId!: string;

  public item!: ISearchItem;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly searchService: SearchService,
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pageId = params['id'];
    });

    const item = await this.searchService.getItem(this.pageId);

    if (!item) {
      await this.router.navigate(['/not-found']);
      return;
    }

    this.item = item;
  }
}
