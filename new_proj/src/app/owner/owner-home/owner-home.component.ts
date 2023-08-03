import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {
  ownerLogInform!: FormGroup;
  endpoint!: string;
  ownerData!: any;
  validuser: boolean = false;
  validUser: boolean = false;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;
  forgotPassword: boolean = false;
  userName!: string;

  constructor(
    public router: Router,
    public formsmodule: FormsModule,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService
  ) { }
  ngOnInit() {
    this.endpoint = this.dataservice.journey;
    this.forgotPassword = this.dataservice.forgotPassword;
    this.userName = this.dataservice.userName;
    console.log('endPoint...', this.endpoint);
    this.logFormDeff();
    this.getownerApicall();
  }


  logFormDeff() {
    this.ownerLogInform = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z A-Z]*$'), this.dataservice.whitespaceValidator]],
      Password: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9@]{8,12}$")]]
    })
  }
  forgoPasswordFormDetails() {
    this.forgetPasswordForm = this.formBuilder.group({
      newPassword: [],
      confirmPassword: []
    })
  }

  loginForm() {
    console.log(this.ownerLogInform.value);
    if (this.ownerLogInform.value.Username) {
      this.dataservice.userName = this.ownerLogInform.value.Username;
    }
    if (this.ownerData) {
      this.ownerData.find((ownerData: any) => {
        if (ownerData.Username === this.ownerLogInform.value.Username && ownerData.Password === this.ownerLogInform.value.Password) {
          this.validUser = true
        }
      });

      if (this.validUser) {
        this.router.navigateByUrl('owner/ownerLoginSuccess');
      }
      else {
        // alert('username or password is incorrect');
        this.dataservice.forgotPassword = !this.forgetPassword
        this.router.navigateByUrl('owner/ownerHome');
      }
    }

  }
  async getownerApicall() {
    // this.dataservice.getApiCall(this.endpoint).subscribe(Respo=>{
    //   this.ownerData = Respo;
    // })
    this.ownerData = await this.dataservice.getApiCall(this.endpoint).toPromise()
    console.log('this.ownerData', this.ownerData);
  }

  // isValidUser(){
  //   this.ownerData.forEach((element:any)=>{
  //     if(element.Username === this.ownerLogInform.value.Username && element.Password === this.ownerLogInform.value.Password) {
  //       this.validUser = true;
  //     }     
  //   });

  // }

  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgoPasswordFormDetails();
  }

  submit() {
    this.updatePassword();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgotPassword = false;
  }

  async updatePassword() {
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.Username === this.userName) {
        user = data;
      }
    })
    if (user) {
      let request = {
        Password: this.forgetPasswordForm.value.newPassword
      }
      // this.commonApiCallService.patchApiCall(this.endPoint,request,user.id ).subscribe((respo:any)=>{
      //   console.log(respo);
      // })
      await this.dataservice.patchApiCall(this.endpoint, request, user.id).toPromise()
    }
    else {
      alert('user is not exist')
      
    }

  }

  ownerSignUpform() {
    this.router.navigateByUrl('owner/ownerSignup')
  }
  backtohome() {
    this.router.navigateByUrl('')
  }
  gotosuc() {
    this.router.navigateByUrl('owner/ownerLoginSuccess')
  }

}  