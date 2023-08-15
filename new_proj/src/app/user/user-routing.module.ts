import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginSuccessComponent } from './user-login-success/user-login-success.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {path:'userHome',component:UserHomeComponent },
  {path:'userSignup',component:UserSignupComponent},
  {path:'userLoginSuccess',component:UserLoginSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
