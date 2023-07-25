import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

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
    let request=this.ownerSignupform.value
    // let endpoint= 'owner'
    console.log('request',request)

    this.dataservice.PostApiCall(this.journey,request).subscribe(res=>{
      console.log('res',res)
   
    })
    
    // this.formdata = this.ownerSignupform.value
    // console.log('ownersignformdata', this.formdata)  
  }
}
