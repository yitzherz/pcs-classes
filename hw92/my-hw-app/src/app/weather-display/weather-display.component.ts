import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  @Input()
  weather!: {};
  constructor() { }

  ngOnInit(): void {
  }

}
