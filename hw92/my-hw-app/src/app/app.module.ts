import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetWeatherComponent } from './get-weather/get-weather.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

@NgModule({
  declarations: [
    AppComponent,
    GetWeatherComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
