import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: ()=>import('./components/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren:()=>import('./components/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path: 'resetPassword',
    loadChildren:()=>import('./components/password/password.module').then(m=>m.PasswordModule)
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }