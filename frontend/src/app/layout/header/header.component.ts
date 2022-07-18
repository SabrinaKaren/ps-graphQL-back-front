import { ContextService } from './../../shared/services/context.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName: string = '-';
  userProfile: string = '-';

  constructor(
    private context: ContextService,
    private router: Router
  ) {
    let userData = this.context.getUserData();
    if (userData) {
      this.userName = userData.name;
      this.userProfile = userData.profile;
    }
  }

  ngOnInit(): void { }

  home(): void {
    this.router.navigate(['']);
  }

}