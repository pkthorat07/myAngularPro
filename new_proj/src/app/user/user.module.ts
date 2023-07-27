import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ShareModule } from '../sharemodule/share/share.module';
import { UserSignupComponent } from './user-signup/user-signup.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule,
  
  ]
})
export class UserModule { }
