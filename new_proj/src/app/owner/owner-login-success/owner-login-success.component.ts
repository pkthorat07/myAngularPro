import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-login-success',
  templateUrl: './owner-login-success.component.html',
  styleUrls: ['./owner-login-success.component.css']
})
export class OwnerLoginSuccessComponent {
  Username! : string;

  constructor (
    private router : Router
  ){}

  backtohome(){
    this.router.navigateByUrl('')
  }
  backtohomenewHotelRegst(){
    this.router.navigateByUrl('owner/ownerhotelRegister')
  }
  

}
