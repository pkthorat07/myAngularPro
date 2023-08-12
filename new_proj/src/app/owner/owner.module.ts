import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { ShareModule } from '../sharemodule/share/share.module';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { MatRadioModule } from '@angular/material/radio';
import { OwnerLoginSuccessComponent } from './owner-login-success/owner-login-success.component';
import { OwnerHotelRegistrationComponent } from './owner-hotel-registration/owner-hotel-registration.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnerSignupComponent,
    OwnerLoginSuccessComponent,
    OwnerHotelRegistrationComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule,
    MatRadioModule
  ]
})
export class OwnerModule { }
