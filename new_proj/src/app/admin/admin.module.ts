import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSignUpComponent } from './admin-sign-up/admin-sign-up.component';
import { ShareModule } from '../sharemodule/share/share.module';
import { AdminLoginSuccessComponent } from './admin-login-success/admin-login-success.component';



@NgModule({
  declarations: [
    
  
    AdminHomeComponent,
            AdminLoginComponent,
            AdminSignUpComponent,
            AdminLoginSuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
  
    
  ]
})
export class AdminModule { }
