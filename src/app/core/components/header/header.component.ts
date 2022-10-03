import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  public isShowSorting: boolean = false;

  public toggleSorting() {
    this.isShowSorting = !this.isShowSorting;

    console.log('toggleSorting', this.isShowSorting);
  }

  // eslint-disable-next-line
  ngOnInit() {}
}
