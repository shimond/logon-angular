import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthSubject = new BehaviorSubject<boolean>(false);

  isAuth$!: Observable<boolean>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.isAuth$ = this.isAuthSubject.asObservable();
  }

  autoLogin() {

  }

  login(userName: string, password: string) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/Auth`, { userName, password }).pipe(tap(x => {
      this.isAuthSubject.next(true);
      sessionStorage.setItem('myToken', x.token);
    }));
  }

  logout() {
    sessionStorage.clear();
    this.isAuthSubject.next(false);
    this.router.navigate(['/login']);
  }
}
