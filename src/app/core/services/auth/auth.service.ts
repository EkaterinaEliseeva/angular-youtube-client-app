import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import LocalStorageUtil from 'src/utils/local-storage.util';
import { IUser } from 'src/app/features/auth/models/user.interface';
import CryptoUtil from 'src/utils/crypto.util';

@Injectable()
export default class AuthService {
  private userInfoProperty = 'userInfo';

  public user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  constructor() {
    this.user.next(this.getUser());
  }

  getUser(): IUser | null {
    const userInfo = LocalStorageUtil.get(this.userInfoProperty);

    if (!userInfo) {
      return null;
    }

    return JSON.parse(userInfo) as IUser;
  }

  async logOut(): Promise<void> {
    LocalStorageUtil.remove(this.userInfoProperty);

    this.user.next(null);
  }

  async logIn(login: string, password: string): Promise<IUser> {
    const hash = await CryptoUtil.hashPassword(password);

    const user: IUser = {
      login,
      hash,
    };

    LocalStorageUtil.set(this.userInfoProperty, JSON.stringify(user));

    this.user.next(user);

    return user;
  }
}
