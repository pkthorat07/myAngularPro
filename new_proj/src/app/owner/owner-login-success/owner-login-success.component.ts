import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-owner-login-success',
  templateUrl: './owner-login-success.component.html',
  styleUrls: ['./owner-login-success.component.css']
})
export class OwnerLoginSuccessComponent {
  hotelDetails:any;
  Username! : string;
  userhotelDetails: any []=[]
  showTable: any;
  tableheading: string[] =['hotelOwnerName','hotelName','hotelAddress','hotelContact','hotelsType','hotelRooms','Password','Delete','Edit']
  Useername: any;
  bchotelDetails: any;


  constructor (
    private router : Router,
    private dataservice: DataserviceService
  ){}


  backtohome(){
    this.router.navigateByUrl('')
  }
  backtohomenewHotelRegst(){
    this.router.navigateByUrl('owner/ownerhotelRegister')
  }
  ngOnInit(){
    console.log('oninit calling...',this.Username)
    this.Useername = this.dataservice.userName;
    console.log('this.Username)',this.Username);
    
  }

  async myhotelDeltails(){
    this.showTable = ! this.showTable
    let endpoint='hotelDetails';
    this.bchotelDetails = await this.dataservice.getApiCall(endpoint).toPromise()
    console.log('hotelsDetails',this.bchotelDetails);
    if (this.bchotelDetails){
      this.hotelDetailsbyOwner();
    }


  }
  hotelDetailsbyOwner(){
    this.userhotelDetails=[]
    this.bchotelDetails.forEach((element:any )=>{
      if (element.hotelOwnerName===this.Useername){
        this.userhotelDetails.push(element);
      }
    });
  }
  


}
