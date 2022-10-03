import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export default class SortingComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'iconSorting',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/icon-sorting.svg')
    );
  }

  // eslint-disable-next-line
  ngOnInit(): void {}
}
