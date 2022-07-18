import { ContextService } from './shared/services/context.service';
import { Component } from '@angular/core';
import { PROFILE_AVALIADOR, PROFILE_PC } from '../app/shared/consts/profiles.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userProfile?: string;

  readonly PROFILE_AVALIADOR = PROFILE_AVALIADOR;
  readonly PROFILE_PC = PROFILE_PC;

  constructor(
    private context: ContextService
  ) {
    this.context.saveUserData({
      name: 'Raquel',
      profile: PROFILE_PC
    });

    this.userProfile = this.context.getUserData()?.profile;
  }

}