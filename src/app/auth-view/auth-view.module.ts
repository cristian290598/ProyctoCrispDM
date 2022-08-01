import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthViewRoutingModule } from './auth-view-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SigninComponent } from './signin/signin.component';
import { VerifiEmailComponent } from './verifi-email/verifi-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    SigninComponent,
    VerifiEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthViewRoutingModule
  ]
})
export class AuthViewModule { }
