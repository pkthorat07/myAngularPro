import { Component } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  city:string= 'mumbai';
  weatherData: any;



  constructor(
    private wetherService: WeatherServiceService
  ){}

  ngOnInit(){
    
    this.getWeatherapidata();
    this.city=''
  
  }



  getWeatherapidata(){
    this.wetherService.getWeatherData(this.city).subscribe(res=>{
      console.log(res)
      this.weatherData =res
      console.log(this.weatherData);
    })
    
  }

  // async wetherResData(cityName:any){  
  //   this.weatherData = await this.wetherService.getWeatherData(cityName).toPromise()
  //   console.log('weatherResData',this.weatherData)
    
  }





  // inputVal(val:any){
  //   console.log('val',val.target.val);
  //   console.log('inputvalu',this.inputVal);
    
  //   this.inp
    
  // }


  // searchBoxValue(){
  //   this.searchBoxValue= this.inp
  // }

 
