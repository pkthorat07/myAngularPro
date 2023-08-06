import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  journey!: string;
  url='http://localhost:3000/';
  userName!:string;
  forgotPassword!:boolean;
  ownerhotelData: any;

  constructor(
    private httpclient: HttpClient,
  ){}

  whitespaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isvaliddata = data.length != newdata.length;
    return isvaliddata ? {whiteSpace:true }: null
  }

  PostApiCall(endpoint:string,data:any){
    let url = this.url + endpoint
    return this.httpclient.post(url,data)
  }

  getApiCall(endpoint:string) {
    let url= this.url + endpoint
  return this.httpclient.get(url)
  }

  patchApiCall(endpoint:string,requestbody:any,id:number){
    let url = this.url + endpoint + '/' + id;
    return this.httpclient.patch(url,requestbody)
  }

  deleteApiCall(endpoint:string, id:number){
    let url = this.url + endpoint + '/' + id
    return this.httpclient.delete(url)
  }
  
}
