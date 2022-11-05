import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export default class AdminComponent {
  isSuccess: boolean = false;

  successMessageTemplate = 'Item "%s" successful added!';

  successMessage = '';

  onSuccessfulAdded(title: string) {
    this.isSuccess = true;
    this.successMessage = this.successMessageTemplate.replace('%s', title);
  }

  resetSuccess() {
    this.isSuccess = false;
    this.successMessage = '';
  }
}
