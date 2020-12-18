import React, { Component } from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }

  getTheWeatherFunction = e => {
    const apiKey = 'cb7c71219cf09eb0bb414b932669be97';
    const units = 'imperial';
    const zip = e.target.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&zip=${zip}&units=${units}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
      })
      .then(weatherData => {
        console.log(weatherData);
        this.setState({
          theWeather: {
            location: weatherData.name,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
            description: `${weatherData.main.temp} and ${weatherData.weather[0].description}`
          }
         
        });
      })
      .catch(this.setState({error: 'Location Not Valid!'}));
  }


  render() {
    const selectWeather = <input type="number" onBlur={this.getTheWeatherFunction} />;
    const myWeather = this.state.theWeather ? <WeatherDetails weatherData={this.state.theWeather} /> : '';
    return (
      <div className="App">
        <h1>Weather App</h1>
        <h3> Please Enter Your Zip {selectWeather}</h3>
        {myWeather}
      </div>
    );
  }
}

