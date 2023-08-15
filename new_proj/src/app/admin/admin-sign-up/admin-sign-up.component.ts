import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent {
  adminSignupform! : FormGroup;
  formsluesss: any;
  formdata: any;
  postresponce!: any;
  welcome: any;
  journey!: string;


  constructor(
    private router : Router,
    private formsmodule: FormsModule,
    private reactForm: ReactiveFormsModule,
    private dataservice: DataserviceService,
    private formbuilder :FormBuilder
  ){}

  ngOnInit(){
    this.formDeff();
    this.journey= this.dataservice.journey;
    console.log('journey',this.journey);
  }

  formDeff(){
    this.adminSignupform = this.formbuilder.group({    
      Fullname: ['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.dataservice.whitespaceValidator]],
      Email: ['',[Validators.required, Validators.email,this.dataservice.whitespaceValidator ]],
      PanCard:['',[Validators.required, Validators.pattern('[A-Z0-9]{9}')]],
      MobileNo:['',[Validators.required]],
      AdharNo:['',[Validators.required]],
      Gender:['',[Validators.required,]],
      Username:['',[Validators.required,Validators.pattern("^[a-z0-9_-]{6,15}$"),this.dataservice.whitespaceValidator]],
      Password:['',[Validators.required,Validators.pattern("^[A-Za-z0-9@]{8,12}$")]],
      confirmPassword:['',[Validators.required,Validators.pattern("^[A-Za-z0-9@]{8,12}$")]],                   
    })
  }

  async submit(){
    let Formbody = {
      Fullname : this.adminSignupform.value.Fullname,
      Email: this.adminSignupform.value.Email,
      PanCard: this.adminSignupform.value.PanCard,
      MobileNo: this.adminSignupform.value.MobileNo,
      Gender: this.adminSignupform.value.Gender,
      AdharNo:this.adminSignupform.value.AdharNo,
      Username: this.adminSignupform.value.Username,
      Password: this.adminSignupform.value.Password,
      confirmPassword: this.adminSignupform.value.confirmPassword
    }
    console.log('request',Formbody)

    this.postresponce = await this.dataservice.PostApiCall(this.journey,Formbody ).toPromise()
        console.log('userSignupform', this.postresponce)  
      this.router.navigateByUrl('admin/adminLoginSuccess')

}

  backtologin(){
    this.router.navigateByUrl('admin/adminHome')
  }


}
