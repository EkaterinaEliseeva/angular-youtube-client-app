import { Component } from '@angular/core';
import SortingService from 'src/app/core/services/sorting/sorting.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export default class SettingsButtonComponent {
  public isShowSorting!: boolean;

  constructor(private readonly sortingService: SortingService) {
    this.sortingService.showSorting.subscribe((isShow) => {
      this.isShowSorting = isShow;
    });
  }

  toggleSorting() {
    this.sortingService.toggleSorting();
  }
}
