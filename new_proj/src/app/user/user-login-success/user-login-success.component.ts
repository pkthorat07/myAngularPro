import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-user-login-success',
  templateUrl: './user-login-success.component.html',
  styleUrls: ['./user-login-success.component.css']
})
export class UserLoginSuccessComponent {
  Data: any= ["id", "hotelOwnerName", "hotelName", "hotelAddress", "hotelContact", "hotelsType", "hotelRooms", "Action"] 
  src = ".//src/assets/img/Akruti.jpg"
   

  // "id", "hotelOwnerName", "hotelName", "hotelAddress", "hotelContact", "hotelsType", "hotelRooms", "Action"

  constructor(
    public dataservice :DataserviceService,
    public router: Router
    ){}

    ngOnInit(){
      this.gethotelsdata()
    }

    gethotelsdata(){
      this.dataservice.getApiCall('hotelDetails').subscribe((res:any)=>{
        console.log('responce',res)
        this.Data = res;
        console.log('show data',this.Data)
      })
    }

  
  openBookingform(){
    this.router.navigateByUrl('user/userBooking')
  }

  book(){
    this.router.navigateByUrl('user/userBooking')
  }
}
