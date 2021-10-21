import { adminRoutes } from './admin-module-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { EditProductsListComponent } from './pages/edit-products-list/edit-products-list.component';
import { RouterModule } from '@angular/router';
import { EditUsersComponent } from './pages/edit-users/edit-users.component';
import { AddNewUserComponent } from './pages/add-new-user/add-new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminHomeComponent,
    EditProductsListComponent,
    EditUsersComponent,
    AddNewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes) // rules for routing for this feature module
  ]
})
export class AdminModule { }
