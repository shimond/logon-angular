import { LoginComponent } from './pages/login/login.component';
import { ResultComponent } from './pages/result/result.component';
import { KefelBoardComponent } from './pages/kefel-board/kefel-board.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CanActivateToAdminService } from './services/can-activate-to-admin.service';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'kefel', component: KefelBoardComponent
  },
  {
    path: 'result/:paramX/:paramY', component: ResultComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/features/admin/admin.module').then(x => x.AdminModule),
    canActivate: [CanActivateToAdminService], // Guards
    canDeactivate: []
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  { path: '**', component: NotFoundComponent }
];

