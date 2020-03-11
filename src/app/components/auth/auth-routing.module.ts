import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { BeforeLoginGuard } from '@myGuards/before-login.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[BeforeLoginGuard]
  },
  {
    path: 'register',
    component:RegisterComponent,
    canActivate:[BeforeLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule 
{
  
}
