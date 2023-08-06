import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-owner-hotel-registration',
  templateUrl: './owner-hotel-registration.component.html',
  styleUrls: ['./owner-hotel-registration.component.css']
})
export class OwnerHotelRegistrationComponent {
  ownerHotelRegisterForm!: FormGroup;
  fontStyle?: string;
  journey!: string;
  postrespoData:any;

  constructor(
    public router: Router,
    public formsmodule: FormsModule,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService
  ) {}

  ngOnInit(){
    this.regiFormDeff()
    this.journey= this.dataservice.journey;
    console.log('journy',this.journey);

  }

  regiFormDeff(){
    this.ownerHotelRegisterForm = this.formBuilder.group({
      hotelOwnerName:['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.whitespaceValidator]],
      hotelName:['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.whitespaceValidator]],
      hotelAddress:['',[Validators.required]],
      hotelContact:['',[Validators.required, Validators.pattern('^[0-9-]*$')]],
      hotelsType:[''],
      hotelRooms:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      Password:['',[Validators.required,Validators.pattern("^[A-Za-z0-9@]{8,12}$")]]

    })

  }
  whitespaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isvaliddata = data.length != newdata.length;
    return isvaliddata ? {whiteSpace:true }: null
  }

  async submithotelDetails(){
    console.log("form value",this.ownerHotelRegisterForm.value)
    let endpoint = 'hotelDetails'
    let requestData= {
      hotelOwnerName: this.ownerHotelRegisterForm.value.hotelOwnerName,
      hotelName: this.ownerHotelRegisterForm.value.hotelName,
      hotelAddress: this.ownerHotelRegisterForm.value.hotelAddress,
      hotelContact: this.ownerHotelRegisterForm.value.hotelContact,
      hotelsType: this.ownerHotelRegisterForm.value.hotelsType,
      hotelRooms: this.ownerHotelRegisterForm.value.hotelRooms,
      Password: this.ownerHotelRegisterForm.value.Password
    }
    // this.dataservice.PostApiCall(endpoint,requestData).subscribe(respo=>{
    //   console.log('respo',respo)
    // })
    this.postrespoData= await this.dataservice.PostApiCall(endpoint,requestData).toPromise()

    this.router.navigateByUrl('owner/ownerLoginSuccess');


  }

  backtohome(){
    this.router.navigateByUrl('')
  }
  

}
