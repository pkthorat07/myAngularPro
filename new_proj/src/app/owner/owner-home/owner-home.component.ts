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
  username!: string;

  constructor(
    public router: Router,
    public formsmodule: FormsModule,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService
  ) {}

  ngOnInit(){
    this.endpoint = this.dataservice.journey;
    this.username = this.dataservice.userName;
    console.log('endPoint...', this.endpoint);
    // console.log('userName',this.username);
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
  }

  loginForm() {
    console.log(this.ownerLogInform.value);
    if (this.ownerLogInform.value.Username) {
      this.dataservice.userName = this.ownerLogInform.value.Username;
      console.log('userName',this.dataservice.userName);

    }
    if (this.ownerData) {
      this.ownerData.find((ownerData: any) => {
        if (ownerData.Username === this.ownerLogInform.value.Username && ownerData.Password === this.ownerLogInform.value.Password) {
          this.validuser = true
        }
      });

      if (this.validuser) {
        this.router.navigateByUrl('owner/ownerLoginSuccess');
      }
      else {
        alert('username or password is incorrect');
        this.router.navigateByUrl('owner/ownerHome')
      }
    }

  }
  async getownerApicall() {
    // this.dataservice.getApiCall(this.endpoint).subscribe(Respo=>{
    //   this.ownerData = Respo;
    // })
    this.ownerData = await this.dataservice.getApiCall(this.endpoint).toPromise()
    console.log('this.ownerData', this.ownerData);
    this.dataservice.ownerhotelData;
    console.log(this.dataservice.ownerhotelData)
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