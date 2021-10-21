import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authenticated$!: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authenticated$ = this.authService.isAuth$;

  }

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }

}
