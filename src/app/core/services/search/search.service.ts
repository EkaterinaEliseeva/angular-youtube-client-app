import { Injectable } from '@angular/core';
import {
  BehaviorSubject, debounceTime, distinctUntilChanged, firstValueFrom, Observable, switchMap,
} from 'rxjs';
import YT_CONFIG from 'src/config/youtube.config';
import { HttpClient } from '@angular/common/http';
import ISearchResponse from 'src/app/features/youtube/models/search-response.model';
import { Store } from '@ngrx/store';
import IAppStore from 'src/app/redux/store.model';
import itemsLoadAction from 'src/app/features/youtube/stores/items/actions/items.action';
import ItemMapper from 'src/app/features/youtube/mappers/item.mapper';

@Injectable()
export default class SearchService {
  private config = YT_CONFIG;

  private readonly minQueryLengthToResponse = 3;

  private readonly debounceTime = 500;

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private readonly httpClient: HttpClient, private readonly store: Store<IAppStore>) {
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
    const itemsRequest = this.httpClient.get(this.config.baseUrl + this.config.videoQuery.replace('%id', ids.join(',')));
    const itemsResponse = await firstValueFrom(itemsRequest) as ISearchResponse;

    this.store.dispatch(itemsLoadAction({
      payload: {
        items: itemsResponse.items?.map((item) => ItemMapper.map(item)), isLoaded: true,
      },
    }));
  }

  private getItems(query: string): Observable<ISearchResponse> {
    return this.httpClient.get(
      this.config.baseUrl + this.config.searchQuery + query,
    ) as Observable<ISearchResponse>;
  }
}
