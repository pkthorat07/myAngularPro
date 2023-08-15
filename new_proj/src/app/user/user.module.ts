import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ShareModule } from '../sharemodule/share/share.module';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginSuccessComponent } from './user-login-success/user-login-success.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserSignupComponent,
    UserLoginSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
  
  ]
})
export class UserModule { }
