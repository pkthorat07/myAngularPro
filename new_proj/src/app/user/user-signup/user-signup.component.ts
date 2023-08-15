import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  userSignupform!: FormGroup;
  journey!: string;
  formdata: any;
  postresponce!: any;
  welcome: any;



  constructor(
    public router: Router,
    public reactiveForm: ReactiveFormsModule,
    public formsModule: FormsModule,
    public dataservice: DataserviceService,
    public formBuilder: FormBuilder
  ){}

  ngOnInit(){
    this.signUpDeff();
    this.journey= this.dataservice.journey;
    console.log('journey',this.journey);
  }

  signUpDeff(){
    this.userSignupform = this.formBuilder.group({    
        Fullname: ['',[Validators.required, Validators.minLength(5),Validators.pattern('[a-z A-Z]*$'),this.dataservice.whitespaceValidator]],
        Email: ['',[Validators.required, Validators.email,this.dataservice.whitespaceValidator ]],
        PanCard:['',[Validators.required, Validators.pattern('[A-Z0-9]{9}')]],
        MobileNo:['',[Validators.required]],
        AdharNo:['',[Validators.required]],
        Gender:['',[Validators.required,]],
        Username:['',[Validators.required,Validators.pattern("^[a-z0-9_-]{6,15}$"),this.dataservice.whitespaceValidator]],
        Password:['',[Validators.required,Validators.pattern("^[A-Za-z0-9@]{8,12}$")]],
        confirmPassword:['',Validators.required],                   
      })
  }

  async submit(){
    let Formbody = {
      Fullname : this.userSignupform.value.Fullname,
      Email: this.userSignupform.value.Email,
      PanCard: this.userSignupform.value.PanCard,
      MobileNo: this.userSignupform.value.MobileNo,
      Gender: this.userSignupform.value.Gender,
      AdharNo:this.userSignupform.value.AdharNo,
      Username: this.userSignupform.value.Username,
      Password: this.userSignupform.value.Password,
      confirmPassword: this.userSignupform.value.confirmPassword
    }
    console.log('request',Formbody)

    this.postresponce = await this.dataservice.PostApiCall(this.journey,Formbody ).toPromise()
        console.log('userSignupform', this.postresponce)  

      this.router.navigateByUrl('user/userLoginSuccess')

}


backtologin(){
  this.router.navigateByUrl('user/userHome')
}


}
