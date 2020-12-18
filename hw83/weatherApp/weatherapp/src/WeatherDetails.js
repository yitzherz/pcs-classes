
import React, { Component } from 'react'


export default class WeatherDetails extends Component {


    render() {
        const { location, description, icon } = this.props.weatherData;


        return (
            <div>
                <h2>{location}</h2>
                <img src={icon} alt="pic unavailable"></img>
                <h3>{description}</h3>
            </div>
        )
    }
}
