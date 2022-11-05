import { Component, Input, OnInit } from '@angular/core';
import IItem from 'src/app/features/youtube/models/item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() public item!: IItem;

  private assertInputsProvided(): void {
    if (!this.item) {
      throw new Error('The required input [item] was not provided');
    }
  }

  public ngOnInit(): void {
    // Ensure the input bindings are actually provided at run-time
    this.assertInputsProvided();
  }
}
