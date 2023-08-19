import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  apiurl='https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey='&appid=9a571457a1bb1376845ff623b02843b5&units=metric';


  constructor(
    public httpclient: HttpClient,
  ) { }

    getWeatherData(cityName:string){
      let url= this.apiurl + cityName + this.apiKey;
      return this.httpclient.get(url);
    }



  // getWetherData(cityName:string){
  //   let url = this.url + cityName 
  //  return this.httpclient.get('url')
  // }

}
