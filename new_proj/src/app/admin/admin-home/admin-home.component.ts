import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(
    private router: Router,
    // private tosterService : ToastrService,
  ){}

  signUpform(){
    this.router.navigateByUrl('admin/signUp')
  }
  backtohome(){
    this.router.navigateByUrl('')
  }
 
  
}
