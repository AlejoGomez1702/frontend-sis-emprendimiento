import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { BeforeLoginGuard } from '@myGuards/before-login.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordResponseComponent } from './reset-password-response/reset-password-response.component';


const routes: Routes = [
  {
    path:'',
    component:ResetPasswordComponent,
    canActivate:[BeforeLoginGuard]
  },
  {
    path:'response',
    component:ResetPasswordResponseComponent,
    canActivate:[BeforeLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule {
}
