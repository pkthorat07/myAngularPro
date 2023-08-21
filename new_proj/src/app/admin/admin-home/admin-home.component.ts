import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { DialogComponent } from 'src/app/owner/dialog/dialog.component';
import { DataserviceService } from 'src/app/service/dataservice.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent{
  adminLogInform!:FormGroup;
  endpoint!: string;
  adminData!: any;
  validuser: boolean = false;
  username!: string;
  showPass: boolean=false;

  constructor(
    public router : Router,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService,
    public dialoge: MatDialog
  ){}

  backtohome(){
    this.router.navigateByUrl('')
  }
  signUp(){
    this.router.navigateByUrl('admin/signUp')
  }
  logInsuccess(){
    this.router.navigateByUrl('admin/adminLoginSuccess')
  }
  // dialogbox(){
  //   const dialogRef= this.dialoge.open(DialogComponent)
  // }

  ngOnInit(){
    this.endpoint = this.dataservice.journey;
    this.username = this.dataservice.userName;
    console.log('endPoint...', this.endpoint);
    // console.log('userName',this.username);
    this.logFormDeff();
    this.getownerApicall();
    
  }
  logFormDeff(){
    this.adminLogInform = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-z A-Z]*$'), this.dataservice.whitespaceValidator]],
      Password: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9@]{8,12}$")]]
    })
  }

  loginForm() {
    console.log(this.adminLogInform.value);
    if (this.adminLogInform.value.Username) {
      this.dataservice.userName = this.adminLogInform.value.Username;
      console.log('userName',this.dataservice.userName);

    }
    if (this.adminData) {
      this.adminData.find((adminData: any) => {
        if (adminData.Username === this.adminLogInform.value.Username && adminData.Password === this.adminLogInform.value.Password) {
          this.validuser = true
        }
      });

      if (this.validuser) {
        this.dataservice.succesToster('Successfully','Log in succesfully',{
          setTimeout:1000,
          positionClass:'toast-top-right'
        })
        this.router.navigateByUrl('admin/adminLoginSuccess');
      }
      else {
        this.dataservice.worningToster('username and password is not correct','Warning',{
          setTimeout:1000,
          positionClass:'toast-top-right'
        })
        // alert('username or password is incorrect');
        this.router.navigateByUrl('admin/adminHome')
      }
    }

  }

  async getownerApicall() {
    // this.dataservice.getApiCall(this.endpoint).subscribe(Respo=>{
    //   this.adminData = Respo;
    // })
    this.adminData = await this.dataservice.getApiCall(this.endpoint).toPromise()
    console.log('this.admiData', this.adminData);
    // this.dataservice.adminhotelData;
    // console.log(this.dataservice.adminhotelData)
  }

  vsiblePass(){
    this.showPass=!this.showPass;
  }
}
