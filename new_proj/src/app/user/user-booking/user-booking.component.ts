import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';



@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent {
  userbookingform!:FormGroup;
  journey!:string;

  constructor(
    private router: Router,
    private dataService: DataserviceService,
    private reactiveForm: ReactiveFormsModule,
    private formsModule :FormsModule,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.bookingFormDeff()
    
  }

  bookingFormDeff(){
    this.userbookingform = this.formBuilder.group({
      Username: ['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.dataService.whitespaceValidator]],
      Email:['',[Validators.required, Validators.email,this.dataService.whitespaceValidator ]],
      PanCard:['',[Validators.required, Validators.pattern('[A-Z0-9]{9}')]],
      mobileNo:['',[Validators.required]],
      adharNo:['',[Validators.required]],
      // Date:[]
    })
  }

  submit(){
    let endpoint='hotelBookings'
    let requestBody={
      Username: this.userbookingform.value.Username,
      Email: this.userbookingform.value.Email,
      PanCard: this.userbookingform.value.PanCard,
      mobileNo: this.userbookingform.value.mobileNo,
      adharNo: this.userbookingform.value.adharNo,
      // Date: this.userbookingform.value.date
    }
    console.log("requestBody",requestBody)
    this.dataService.PostApiCall(endpoint,requestBody).subscribe(res=>{
      console.log("response", res)
    })
    this.router.navigateByUrl('user/userLoginSuccess')

  }


}
