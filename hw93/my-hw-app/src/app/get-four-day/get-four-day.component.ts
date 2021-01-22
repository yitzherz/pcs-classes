import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-four-day',
  templateUrl: './get-four-day.component.html',
  styleUrls: ['./get-four-day.component.css']
})
export class GetFourDayComponent  {
  apiKey = 'cb7c71219cf09eb0bb414b932669be97';
  units = 'imperial';
  constructor(private httpClient: HttpClient) { }

  zipInput: string = '';
  weatherData!: any;
  getFourDay(){
    console.log(this.zipInput);
    this.httpClient.get<any>(`http://pro.openweathermap.org/data/2.5/forecast/hourly?zip=94040,us&&appid=${this.apiKey}`)
      .subscribe(weather => {
        console.log(weather);
        this.weatherData = {
          location: weather.name,
            
        }
      })
  }

}
