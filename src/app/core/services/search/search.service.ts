import { Injectable } from '@angular/core';
import {
  BehaviorSubject, debounceTime, distinctUntilChanged, firstValueFrom, Observable, switchMap,
} from 'rxjs';
import YT_CONFIG from 'src/config/youtube.config';
import { HttpClient } from '@angular/common/http';
import ISearchResponse from 'src/app/features/youtube/models/search-response.model';
import ISearchItem from 'src/app/features/youtube/models/search-item.model';

@Injectable()
export default class SearchService {
  private config = YT_CONFIG;

  private readonly minQueryLengthToResponse = 3;

  private readonly debounceTime = 500;

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public items: BehaviorSubject<ISearchItem[]> = new BehaviorSubject<ISearchItem[]>([]);

  constructor(private readonly httpClient: HttpClient) {
    this.searchQuery
      .pipe(
        debounceTime(this.debounceTime),
        distinctUntilChanged(),
        switchMap((searchQuery) => {
          if (searchQuery.length >= this.minQueryLengthToResponse) {
            return this.getItems(searchQuery);
          }

          return [];
        }),
      )
      .subscribe(
        (searchResult) => this.getItemsByIds(searchResult.items.map((item) => item.id.videoId)),
      );
  }

  public changeSearchQuery(value: string) {
    this.searchQuery.next(value);
  }

  public async getItem(id: string) {
    const itemRequest = this.httpClient.get(this.config.baseUrl + this.config.videoQuery.replace('%id', id));
    const itemResponse = await firstValueFrom(itemRequest) as ISearchResponse;

    return (itemResponse.items[0]);
  }

  private async getItemsByIds(ids: string[]) {
    const items = ids?.length
      ? await Promise.all(ids.map(async (id) => this.getItem(id)))
      : [];

    this.items.next(items);
  }

  private getItems(query: string): Observable<ISearchResponse> {
    return this.httpClient.get(
      this.config.baseUrl + this.config.searchQuery + query,
    ) as Observable<ISearchResponse>;
  }
}
