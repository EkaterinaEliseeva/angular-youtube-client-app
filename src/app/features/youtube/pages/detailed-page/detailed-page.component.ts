import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import searchResponseMock from 'src/app/features/youtube/mocks/search-response.mock';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
})
export default class DetailedPageComponent implements OnInit {
  public pageId!: string;

  private searchResponse = searchResponseMock;

  public item!: ISearchItem;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) {

  }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.pageId = params['id'];
    });

    const item = this.searchResponse.items.find((searchItem) => searchItem.id === this.pageId);

    if (!item) {
      await this.router.navigate(['/not-found']);
      return;
    }

    this.item = item;
  }
}
