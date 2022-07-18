import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAvalService implements CanActivate {

  constructor(
    private router: Router,
    private context: ContextService
  ) { }

  canActivate(): any {

    let userData = this.context.getUserData();
    if (userData) {
      const profile = userData.profile;
      if (profile == 'AVALIADOR') return true;
      else if (profile == 'P&C') this.router.navigate(['candidatos']);
    }
    this.router.navigate(['unauthorized']);
    return false;
  }

}