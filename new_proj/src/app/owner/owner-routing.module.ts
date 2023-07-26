import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';
import { OwnerLoginSuccessComponent } from './owner-login-success/owner-login-success.component';

const routes: Routes = [
  {path:'ownerHome',component: OwnerHomeComponent},
  {path:'ownerSignup',component:OwnerSignupComponent},
  {path:'ownerLoginSuccess',component:OwnerLoginSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OwnerRoutingModule {}
