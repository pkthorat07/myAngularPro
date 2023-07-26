import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';
import { MatRadioButton} from "@angular/material/radio"

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  ownerSignupform!: FormGroup;
  formdata: any;
  journey!: string;
  postresponce!: any;
  welcome: any;

  constructor(
    public router :Router,
    public formsmodule: FormsModule,
    public reactiveform: ReactiveFormsModule,
    public formbuilder: FormBuilder,
    public dataservice: DataserviceService
  ){

  }

  backtologin(){
    this.router.navigateByUrl('')
  }

  ngOnInit(){
    this.signFormDeff()
    this.journey= this.dataservice.journey;
    console.log('journey',this.journey);
    
  }
  signFormDeff() {
    this.ownerSignupform = this.formbuilder.group({
    
      Fullname: ['',[Validators.required]],
      Email: ['',Validators.required],
      PanCard:['',Validators.required],
      MobileNo:['',Validators.required],
      AdharNo:['',Validators.required],
      Gender:['',Validators.required],
      Username:['',Validators.required],
      Password:['',Validators.required],
      confirmPassword:['',Validators.required],
    })
  }



  submit(){
    let Formbody = {
      Fullname : this.ownerSignupform.value.Fullname,
      Email: this.ownerSignupform.value.Email,
      PanCard: this.ownerSignupform.value.PanCard,
      MobileNo: this.ownerSignupform.value.MobileNo,
      AdharNo: this.ownerSignupform.value.AdharNo,
      Gender: this.ownerSignupform.value.Gender,
      Username: this.ownerSignupform.value.Username,
      Password: this.ownerSignupform.value.Password,
      confirmPassword: this.ownerSignupform.value.confirmPassword
    }
    // let endpoint= 'owner'
    console.log('request',Formbody)

    this.dataservice.PostApiCall(this.journey,Formbody).subscribe(Response=>{
      console.log('responsive value',Response)
      this.postresponce =Response
      
    })
  


    // if(this.postresponce?.id){
    //   console.log('postresponce value',this.postresponce)
    // }
    // this.formdata = this.ownerSignupform.value
    // console.log('ownersignformdata', this.formdata)  
  }
  
}
