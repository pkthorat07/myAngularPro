import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { ShareModule } from '../sharemodule/share/share.module';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';


@NgModule({
  declarations: [
    OwnerHomeComponent,
    OwnerSignupComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ShareModule
  ]
})
export class OwnerModule { }
