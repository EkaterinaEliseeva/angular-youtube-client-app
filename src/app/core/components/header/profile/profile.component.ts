import { Component } from '@angular/core';
import AuthService from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export default class ProfileComponent {
  public isLogged!: boolean;

  public userName!: string | null;

  constructor(private readonly authService: AuthService) {
    this.authService.user.subscribe((user) => {
      this.isLogged = !!user;
      this.userName = user?.login ?? null;
    });
  }

  async logOut() {
    await this.authService.logOut();
  }
}
