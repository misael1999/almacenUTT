import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './services/service.index';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: {titulo: 'Login'} },
  {
      path: '',
      component: PagesComponent,
      canActivate: [ LoginGuard ],
      loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, {useHash: true} )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
