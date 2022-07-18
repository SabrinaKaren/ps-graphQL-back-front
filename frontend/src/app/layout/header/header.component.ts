import { ContextService } from './../../shared/services/context.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string = '-';
  userProfile: string = '-';

  constructor(
    private context: ContextService
  ) {
    let userData = this.context.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.userProfile = userData.profile;
    }
  }

  ngOnInit(): void { }

}
