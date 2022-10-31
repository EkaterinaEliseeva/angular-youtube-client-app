import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from 'src/app/core/services/auth/auth.service';
import { FormGroup } from '@angular/forms';
import VALIDATION_LABELS from 'src/config/validation.config';
import PasswordControl from 'src/app/features/auth/controls/password.control';
import LoginControl from 'src/app/features/auth/controls/login.control';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent implements OnInit {
  public formActionName = 'Login';

  public authForm!: FormGroup;

  public labels = VALIDATION_LABELS;

  login: LoginControl = new LoginControl();

  password: PasswordControl = new PasswordControl();

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authForm = new FormGroup({
      login: this.login.control,
      password: this.password.control,
    });
  }

  async submitForm(event: SubmitEvent) {
    event.preventDefault();
    const { login, password } = this.authForm.value;

    const user = await this.authService.logIn(login, password);

    if (user) {
      await this.router.navigate(['/main']);
    }
  }

  get passControl() {
    return this.authForm.get('password');
  }
}
