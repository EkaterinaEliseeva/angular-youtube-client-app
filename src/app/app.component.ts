import { Component } from '@angular/core';
import IconService from 'src/app/core/services/icon/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'youtube-client-app';

  constructor(private iconService: IconService) {
    this.iconService.register();
  }
}
