import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IFormField } from 'src/app/shared/models/form-field.interface';
import AuthService from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  public formActionName = 'Login';

  public authFormFields: IFormField[] = [
    {
      name: 'login',
      required: true,
    },
    {
      name: 'password',
      required: true,
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
  }

  async submitForm(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      return;
    }

    const formData = new FormData(form);

    const login = formData.get('login') as string;
    const password = formData.get('password') as string;

    if (login && password) {
      const user = await this.authService.logIn(login, password);

      if (user) {
        await this.router.navigate(['/main']);
      }
    }
  }
}
