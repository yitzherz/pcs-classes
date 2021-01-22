import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GetWeatherComponent } from './get-weather/get-weather.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { GetFourDayComponent } from './get-four-day/get-four-day.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GetWeatherComponent,
    WeatherDisplayComponent,
    GetFourDayComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
