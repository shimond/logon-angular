import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddNewUserComponent } from '../features/admin/pages/add-new-user/add-new-user.component';
import { CanExit } from './can-exit.interface';

@Injectable({
  providedIn: 'root'
})
export class CanDectivateGuardService implements CanDeactivate<CanExit> {
  canDeactivate(componentTryToExitFrom: CanExit, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      return componentTryToExitFrom.canExit();
    }


  constructor() { }
}
