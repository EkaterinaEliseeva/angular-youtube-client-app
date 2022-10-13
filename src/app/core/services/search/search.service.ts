import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export default class SearchService {
  public searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public changeSearchQuery(value: string) {
    this.searchQuery.next(value);
  }
}
