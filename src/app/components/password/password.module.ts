import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'

import { PasswordRoutingModule } from './password-routing.module'
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordResponseComponent } from './reset-password-response/reset-password-response.component'

@NgModule({
  declarations: [ResetPasswordComponent, ResetPasswordResponseComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    FormsModule
  ]
})
export class PasswordModule { }
