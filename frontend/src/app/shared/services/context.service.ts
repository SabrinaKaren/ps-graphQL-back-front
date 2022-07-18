import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  readonly STORAGE_ITEM = 'elo-ps-user';

  constructor() { }

  saveUserData(user: UserModel) {
    window.sessionStorage.setItem(this.STORAGE_ITEM, JSON.stringify(user));
  }

  getUserData(): UserModel | undefined {
    let user: any = window.sessionStorage.getItem(this.STORAGE_ITEM);
    return user ? JSON.parse(user) : undefined;
  }

}

export interface UserModel {
  name: string;
  profile: string;
}