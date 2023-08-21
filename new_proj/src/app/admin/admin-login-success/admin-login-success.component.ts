import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/owner/dialog/dialog.component';
import { DataserviceService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-admin-login-success',
  templateUrl: './admin-login-success.component.html',
  styleUrls: ['./admin-login-success.component.css']
  
})
export class AdminLoginSuccessComponent {
  hotelsData: any;
  displayedColumns: string[] = ["id","hotelOwnerName","hotelName","hotelAddress","hotelContact", "hotelsType","hotelRooms","Action"];
  dataSource = new MatTableDataSource<any>
  showtable: boolean=false;
  newhotelData: any;


constructor(
  private dataService: DataserviceService,
  private router :Router,
  private dialoge: MatDialog
  
){}


ngOnInit(){
  this.getHotelList()


}

back(){
  this.router.navigateByUrl('')
}

getHotelList(){
  let endpoint= "hotelDetails";
  this.dataService.getApiCall(endpoint).subscribe((res:any)=>{
   console.log(res)
   this.hotelsData= res
   this.dataSource=res
  })
}
delete(id:number){
  console.log('delete calling')
  const dialogRef= this.dialoge.open(DialogComponent,{
    width: '250px'
  })
  dialogRef.afterClosed().subscribe((res:any)=>{
    console.log('dialog res',res)
    if (res === 'YES'){
      this.deleteRecord(id)
      this.showtable= ! this.showtable;  
      this.getHotelList
    }
  })
}
async deleteRecord(id:number){
this.newhotelData= await this.dataService.deleteApiCall('hotelDetails', id).toPromise()
}


  

}
