import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private Auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  isAuth(): boolean{
    return this.Auth.isAuthenticated();
  }
}
