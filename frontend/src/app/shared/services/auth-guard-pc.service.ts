import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ContextService } from './context.service';
import { PROFILE_AVALIADOR, PROFILE_PC } from '../consts/profiles.consts';

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
      if (profile == PROFILE_PC) return true;
      else if (profile == PROFILE_AVALIADOR) {
        this.router.navigate(['avaliacoes']);
        return false;
      }
    }
    this.router.navigate(['unauthorized']);
    
    return false;
  }

}