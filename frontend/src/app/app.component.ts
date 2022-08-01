import { ContextService } from './shared/services/context.service';
import { Component } from '@angular/core';
import { PROFILE_AVALIADOR, PROFILE_PC } from '../app/shared/consts/profiles.consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userProfile?: string;
  isUnauthorized: boolean = false;

  readonly PROFILE_AVALIADOR = PROFILE_AVALIADOR;
  readonly PROFILE_PC = PROFILE_PC;

  constructor(
    private context: ContextService,
    private router: Router
  ) {
    this.userProfile = this.context.getUserData()?.profile;
    setTimeout(() => {
      if (this.router.url == '/unauthorized') this.isUnauthorized = true;
      else this.isUnauthorized = false;
    }, 0);
    
  }

  ngOnInit(): void {
    if (this.userProfile) {
      if (this.userProfile == this.PROFILE_AVALIADOR) this.router.navigate(['avaliacoes']);
      else if (this.userProfile == this.PROFILE_PC) this.router.navigate(['candidatos']);
    }
  }

  loginAsPC(): void {
    this.context.saveUserData({
      name: 'Raquel',
      profile: PROFILE_PC
    });
    this.userProfile = this.context.getUserData()?.profile;
    document.location.reload();
  }

  loginAsEvaluator(): void {
    this.context.saveUserData({
      name: 'Ricardo',
      profile: PROFILE_AVALIADOR
    });
    this.userProfile = this.context.getUserData()?.profile;
    document.location.reload();
  }

}