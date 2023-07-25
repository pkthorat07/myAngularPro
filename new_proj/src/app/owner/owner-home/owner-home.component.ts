import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {


  constructor(
    public router : Router
  ){

  }

  ownerSignUpform(){
    this.router.navigateByUrl('owner/ownerSignup')
  }
  backtohome(){
    this.router.navigateByUrl('')
  }


}
