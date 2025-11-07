import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUserlogged: boolean;
  constructor(private _userAuthSevice: UserAuthService) {
    this.isUserlogged = this._userAuthSevice.getUserLogged();
  }
  login() {
    this._userAuthSevice.login();
    this.isUserlogged = this._userAuthSevice.getUserLogged();
  }
  logout() {
    this._userAuthSevice.logout();
    this.isUserlogged = this._userAuthSevice.getUserLogged();
  }
}
