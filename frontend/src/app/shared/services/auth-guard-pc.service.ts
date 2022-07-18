import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ContextService } from './context.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardPCService implements CanActivate {

  constructor(
    private router: Router,
    private context: ContextService
  ) { }

  canActivate(): any {

    let userData = this.context.getUserData();
    if (userData) {
      const profile = userData.profile;
      if (profile == 'P&C') return true;
      else if (profile == 'AVALIADOR') this.router.navigate(['avaliacoes']);
    }
    this.router.navigate(['unauthorized']);
    return false;
  }

}