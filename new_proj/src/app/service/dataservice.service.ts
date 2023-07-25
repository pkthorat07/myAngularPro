import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 

  journey!: string;

  url='http://localhost:3000/';

  constructor(
    private httpclient: HttpClient
  ) { }



  PostApiCall(endpoint:string,data:any){
    let url = this.url + endpoint
    return this.httpclient.post(url,data)
  }
  
}
