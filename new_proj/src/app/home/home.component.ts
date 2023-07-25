import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private router : Router,
    private dataService: DataserviceService
  ){}

  journey(journey:string){
    if(journey === 'admin'){
    this.dataService.journey= 'admin'
    this.router.navigateByUrl('admin/adminHome')
  }
  else if(journey==='owner'){
    this.dataService.journey='owner'
    this.router.navigateByUrl('owner/ownerHome')
  }
  else{
    this.dataService.journey='user'
    this.router.navigateByUrl('user/userHome')
  // }


    // journey(){
    //   this.router.navigateByUrl('user')
    // }
  
  }
  }
}
