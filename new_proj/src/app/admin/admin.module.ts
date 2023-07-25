import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { ShareModule } from '../sharemodule/share/share.module';



@NgModule({
  declarations: [
    
  
    AdminHomeComponent,
            AdminLoginComponent,
            AdminSignUpComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
  
    
  ]
})
export class AdminModule { }
