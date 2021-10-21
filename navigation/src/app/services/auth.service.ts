import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAuth$!: Observable<boolean>;
  constructor() {
    this.isAuth$ = this.isLoggedInSubject.asObservable();
  }


  login() {
    //if username == '' && password == ''
    this.isLoggedInSubject.next(true);
  }
  logout() {
    this.isLoggedInSubject.next(false);

  }
}
