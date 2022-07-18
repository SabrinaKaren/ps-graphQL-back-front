import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() { }

  getUserData(): any {
    let user: any = window.sessionStorage.getItem('elo-ps-user');
    return user ? JSON.parse(user) : undefined;
  }

}