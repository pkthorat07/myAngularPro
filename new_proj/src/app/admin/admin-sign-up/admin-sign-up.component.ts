import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent {
  adminSignupform! : FormGroup;
  formsluesss: any;

  constructor(
    private router : Router,
    private formsmodule: FormsModule,
    private reactForm: ReactiveFormsModule,
    private formbuilder :FormBuilder
  ){}

  ngOnInit(){
    this.formDeff()
  }

  formDeff(){
    this.adminSignupform=this.formbuilder.group({
      
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

  backtologin(){
    this.router.navigateByUrl('admin')
  }
  submit(){
    this.formsluesss= this.adminSignupform.value
    console.log('thisformvalue',this.formsluesss)
  }

}
