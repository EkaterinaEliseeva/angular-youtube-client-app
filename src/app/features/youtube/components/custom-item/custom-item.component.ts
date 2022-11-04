import { Component, Input, OnInit } from '@angular/core';
import ICustomItem from 'src/app/features/youtube/stores/custom-items/custom-item.interface';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export default class CustomItemComponent implements OnInit {
  @Input() public item!: ICustomItem;

  date!: string;

  ngOnInit() {
    this.date = this.item.date.toDateString();
  }
}
