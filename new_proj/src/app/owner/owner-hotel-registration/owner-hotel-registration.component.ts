import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
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
  editId: any;
  dataById: any;
  hotelImages: any;

  constructor(
    public router: Router,
    public formsmodule: FormsModule,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService
  ) {}

  ngOnInit(){
    this.editId = this.dataservice.id;
    this.dataById = this.dataservice.dataById;
    this.regiFormDeff()
    this.journey= this.dataservice.journey;
    console.log('journy',this.journey);

  }
 

  regiFormDeff(){
    this.ownerHotelRegisterForm = this.formBuilder.group({
      hotelOwnerName:[this.dataById? this.dataById.hotelOwnerName:'',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.whitespaceValidator]],
      hotelName:[this.dataById? this.dataById.hotelName:'',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.whitespaceValidator]],
      hotelAddress:[this.dataById? this.dataById.hotelAddress:'',[Validators.required]],
      hotelContact:[this.dataById? this.dataById.hotelContact:'',[Validators.required, Validators.pattern('^[0-9-]*$')]],
      hotelsType:[this.dataById? this.dataById.hotelsType:''],
      hotelRooms:[this.dataById? this.dataById.hotelRooms:'',[Validators.required,Validators.pattern('^[0-9]*$')]],
      Username:['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.whitespaceValidator]],
      Password:[this.dataById? this.dataById.Password:'',[Validators.required,Validators.pattern("^[A-Za-z0-9@]{8,12}$")]],
      hotelImages:[this.dataById? this.dataById.Password:'',[]]

    })

  }
  whitespaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isvaliddata = data?.length  != newdata?.length;
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
      Username: this.ownerHotelRegisterForm.value.Username,
      Password: this.ownerHotelRegisterForm.value.Password,
      hotelImages: this.hotelImages
    }
    // this.dataservice.PostApiCall(endpoint,requestData).subscribe(respo=>{
    //   console.log('respo',respo)
    // })
    if(this.editId){
      this.dataservice.patchApiCall(endpoint, requestData, this.editId).toPromise()
    }
    else{
      this.postrespoData= await this.dataservice.PostApiCall(endpoint,requestData).toPromise()

    }

    this.router.navigateByUrl('owner/ownerLoginSuccess');


  }
  backt(){
    this.router.navigateByUrl('owner/ownerLoginSuccess')
  }

  // onFileSelected(event:any){
  //   let images =[...event.target.files]
  //   let fileNames = images.map((item:any)=>{
  //     return "assets/img/" + item.name
  //   })
  //   this.hotelImages = [...fileNames]
  }

  

 

 
  


