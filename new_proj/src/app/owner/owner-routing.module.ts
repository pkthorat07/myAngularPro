import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';

const routes: Routes = [
  {path:'ownerHome',component: OwnerHomeComponent},
  {path:'ownerSignup',component:OwnerSignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OwnerRoutingModule {}
