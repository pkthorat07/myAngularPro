import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {
  ownerLogInform!: FormGroup;
  endpoint!:string;
  ownerData!: any;
  validuser:boolean= false;
 



  constructor(
    public router: Router,
    public formsmodule: FormsModule,
    public reactiveForm: ReactiveFormsModule,
    public formBuilder: FormBuilder,
    public dataservice: DataserviceService
  ) { }
  ngOnInit() {
    this.logFormDeff()
    this.endpoint = this.dataservice.journey
    console.log('endPoint',this.endpoint);
  }
  ownerSignUpform() {
    this.router.navigateByUrl('owner/ownerSignup')
  }
  backtohome() {
    this.router.navigateByUrl('')
  }
  
  logFormDeff(){
    this.ownerLogInform = this.formBuilder.group({
      Username: ['',[]],
      Password: ['',[]]
    })
  }

  loginForm(){
    console.log('login value',this.ownerLogInform.value);
    this.getownerApicall();
    console.log('ownerData',this.ownerData);

    if(this.ownerData){
      this.isvaliduser();
      if(this.validuser){
        this.router.navigateByUrl('owner/ownerLoginSuccess');
      }
      else{
        this.router.navigateByUrl('owner/ownerHome')
      }
    }
   
   
    
    
    }
  getownerApicall() {
    this.dataservice.getApiCall(this.endpoint).subscribe(getownerrespo=>{
      console.log('getownerrespo',getownerrespo);
      this.ownerData= getownerrespo;
    })
  }
  isvaliduser(){
    this.ownerData.forEach((element:any)=>{
      if(element.Username === this.ownerLogInform.value.Username && element.Password === this.ownerLogInform.value.Password){
        this.validuser= true
      }
    })

  }
  gotosuc(){
    this.router.navigateByUrl('owner/ownerLoginSuccess')
  }
 
}