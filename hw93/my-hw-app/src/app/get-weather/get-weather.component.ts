import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherInfo } from '../shared/weatherInfo';

@Component({
  selector: 'app-get-weather',
  templateUrl: './get-weather.component.html',
  styleUrls: ['./get-weather.component.css']
})
export class GetWeatherComponent {
  apiKey = 'cb7c71219cf09eb0bb414b932669be97';
  units = 'imperial';
  constructor(private httpClient: HttpClient) { }

  zipInput: string = '';
  weatherData!: any;
  getTheWeather() {
    console.log(this.zipInput);
    this.httpClient.get<any>(`http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&zip=${this.zipInput}&units=${this.units}`)
      .subscribe(weather => {
        console.log(weather);
        this.weatherData = {
          location: weather.name,
            icon: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
            description: `${weather.main.temp} and ${weather.weather[0].description}`
        }
      })
  }
}
