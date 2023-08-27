import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  userLogInform! : FormGroup;
  endpoint!: string;
  userData!: any;
  validuser: boolean = false;
  username!: string;
  showPass: boolean=false;


  constructor(
    public router: Router,
    public reactiveForm: ReactiveFormsModule,
    public formsModule: FormsModule,
    public dataservice: DataserviceService,
    public formBuilder: FormBuilder
  ){}


  ngOnInit(){
    this.endpoint = this.dataservice.journey;
    this.username = this.dataservice.userName;
    console.log('endPoint...', this.endpoint);
    // console.log('userName',this.username);
    this.logFormDeff();
    this.getownerApicall();
    
  }

  logFormDeff() {
    this.userLogInform = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z A-Z]*$'), this.dataservice.whitespaceValidator]],
      Password: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9@]{8,12}$")]]
    })
  }
  forgoPasswordFormDetails() {
  }

  loginForm() {
    console.log(this.userLogInform.value);
    if (this.userLogInform.value.Username) {
      this.dataservice.userName = this.userLogInform.value.Username;
      console.log('userName',this.dataservice.userName);

    }
    if (this.userData) {
      this.userData.find((userData: any) => {
        if (userData.Username === this.userLogInform.value.Username && userData.Password === this.userLogInform.value.Password) {
          this.validuser = true
        }
      });  

      if (this.validuser) {
        this.dataservice.succesToster('Successfully','Log in succesfully',{
          setTimeout:1000,
          positionClass:'toast-top-right'
        })
        this.router.navigateByUrl('user/userLoginSuccess');
      }
      else {
        this.dataservice.worningToster('username and password is not correct','Warning',{
          setTimeout:500,
          positionClass:'toast-top-right'
        })
        // alert('username or password is incorrect');
        this.router.navigateByUrl('user/userHome')
      }
    }

  }


async getownerApicall(){


  this.userData = await this.dataservice.getApiCall(this.endpoint).toPromise()
    console.log('this.userData', this.userData);
    // this.dataservice.userBookingData;
    // console.log(this.dataservice.userBookingData)
  }

  vsiblePass(){
    this.showPass=!this.showPass;
  }
  

  userSignUpform() {
    this.router.navigateByUrl('user/userSignup')
  }
  backtohome() {
    this.router.navigateByUrl('')
  }
  gotosuc() {
    this.router.navigateByUrl('user/userLoginSuccess')
  }



}
  