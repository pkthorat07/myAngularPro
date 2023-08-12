import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { DialogComponent } from '../dialog/dialog.component';

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
  dataById:any;
  

  constructor (
    private router : Router,
    private dataservice: DataserviceService,
    private dialog: MatDialog,
  ){}

  ngOnInit(){
    console.log('oninit calling...')
    this.Useername = this.dataservice.userName;
    console.log('this.Username)',this.Useername);
    
  }

  backtohome(){
    this.router.navigateByUrl('')
  }
  backtohomenewHotelRegst(){
    this.dataservice.dataById = {};
    this.dataservice.id = '';
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
      this.dataservice.worningToster('can not find any register hotel','No data found',{
        setTimeout:1000,
        positionClass: 'toast-top-right'
      })
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
  
   Delete(id:number){
    const dialogRef= this.dialog.open(DialogComponent,{
      width: '250px'
    })
  
  dialogRef.afterClosed().subscribe((res:any)=>{
    console.log('res',res)
    if(res === 'YES'){
    this.deletRecord(id)
    this.showtable = ! this.showtable;
  this.myhotelDeltails()
  }
  });
}
  async deletRecord(id:number){
  await this.dataservice.deleteApiCall('hotelDetails', id).toPromise()
  
  }

  async editUpdate(id:number){
    this.dataservice.id = id;
    this.dataById = await this.dataservice.getApiCall('hotelDetails', id).toPromise()
    this.dataservice.dataById = this.dataById
    this.router.navigateByUrl('owner/ownerhotelRegister')
  }

  



}
