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
  tableheading: string[] =['hotelOwnerName','hotelName','hotelAddress','hotelContact','hotelsType','hotelRooms','Edit','Delete']
  Useername: any;
  userHotelDetails:any[] = [];
  showtable:boolean=false;
  deletOwenerdata:any;

  constructor (
    private router : Router,
    private dataservice: DataserviceService
  ){}

  ngOnInit(){
    console.log('oninit calling...')
    this.Useername = this.dataservice.userName;
    // console.log('this.Username)',this.Useername);
    
  }

  backtohome(){
    this.router.navigateByUrl('')
  }
  backtohomenewHotelRegst(){
    this.router.navigateByUrl('owner/ownerhotelRegister')
  }

  async myhotelDeltails(){
    this.showtable = !this.showtable;
    let endpoint = 'hotelDetails'
    this.hotelDetails= await this.dataservice.getApiCall(endpoint).toPromise()
    console.log("hotelDetails",this.hotelDetails);
    this.userHotelDetails = []

    if (this.hotelDetails){
      this.hotelDetailsByOwner();  
    if(this.userHotelDetails.length > 0){

    }else{
      alert('no owner data availabele')
    }
  }
  }

  hotelDetailsByOwner(){
    this.hotelDetails.forEach((element:any)=>{
      if(element.hotelOwnerName === this.Useername){
        this.userHotelDetails.push(element)
      }
  })
  console.log('this.userHotelDetails',this.userHotelDetails);

  }
  
  async Delete(id:number){
  await this.dataservice.deleteApiCall('hotelDetails', id).toPromise()
  this.showtable = ! this.showtable;
  this.myhotelDeltails()
  }


}
