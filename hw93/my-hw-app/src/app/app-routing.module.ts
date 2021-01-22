import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFourDayComponent } from './get-four-day/get-four-day.component';
import { GetWeatherComponent } from './get-weather/get-weather.component';

const routes: Routes = [
  {
    path: 'four',
    component: GetFourDayComponent
  },{
    path: 'weather',
    component: GetWeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
