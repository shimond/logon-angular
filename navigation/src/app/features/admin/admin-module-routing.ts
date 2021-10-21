import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';
import { EditProductsListComponent } from './pages/edit-products-list/edit-products-list.component';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { Route } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CanDectivateGuardService } from 'src/app/services/can-dectivate-guard.service';

export const adminRoutes: Route[] = [
  {
    path: '', component: AdminHomeComponent, children: [
      { path: 'users', component: EditUsersComponent },
      { path: 'adduser', component: AddNewUserComponent, canDeactivate: [CanDectivateGuardService] },
      { path: 'products', component: EditProductsListComponent }]
  }
];
